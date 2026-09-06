import { NextRequest, NextResponse } from "next/server";

/**
 * Content-Security-Policy estricta basada en nonce por solicitud.
 * Next.js propaga automáticamente el nonce a los <script> que inyecta,
 * por lo que no hace falta pasarlo manualmente a cada componente.
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Excluye assets estáticos y de imagen para no gastar cómputo del
    // middleware en cada archivo servido desde /public o /_next/static.
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
