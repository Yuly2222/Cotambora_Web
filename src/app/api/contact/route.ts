import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed, retryAfterSeconds } = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds ?? 60) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", details: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot: si el campo trampa viene con contenido, es un bot. Se
  // responde 200 igualmente para no revelar la existencia del honeypot.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (apiKey && to) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Cotambora Web <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `Nuevo mensaje de contacto de ${name}`,
          text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
        }),
      });

      if (!response.ok) {
        console.error("Error del proveedor de correo:", await response.text());
        return NextResponse.json(
          { error: "No se pudo enviar el mensaje. Intenta más tarde." },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("Error al enviar el correo de contacto:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta más tarde." },
        { status: 502 },
      );
    }
  } else {
    // Sin proveedor de correo configurado: se registra para desarrollo.
    console.warn("[contact] RESEND_API_KEY/CONTACT_EMAIL_TO no configurados; mensaje no enviado:", {
      name,
      email,
    });
  }

  return NextResponse.json({ ok: true });
}
