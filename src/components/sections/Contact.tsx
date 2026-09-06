"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""), // honeypot
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setErrorMessage(data?.error ?? "No se pudo enviar el mensaje. Intenta más tarde.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No se pudo enviar el mensaje. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-sand-100 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Hablemos" title="Contáctanos" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600">
              ¿Quieres vincularte a nuestros programas, proponer una alianza o invitarnos a un
              evento? Escríbenos y te responderemos lo antes posible.
            </p>

            <div className="mt-8 space-y-2 text-sm text-ink-600">
              <p>
                <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-accent-500">
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                className="w-full rounded-sm border border-ink-100 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className="w-full rounded-sm border border-ink-100 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                className="w-full resize-none rounded-sm border border-ink-100 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              />
            </div>

            {/* Honeypot anti-spam: oculto para personas, visible para bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Empresa</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-sm bg-accent-500 px-6 py-3 text-sm font-medium text-sand-100 transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" ? (
                <p className="text-sm font-medium text-emerald-700">
                  ¡Gracias! Tu mensaje fue enviado correctamente.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm font-medium text-red-700">{errorMessage}</p>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
