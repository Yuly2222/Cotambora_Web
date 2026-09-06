/**
 * Limitador de tasa en memoria, de mejor esfuerzo, para proteger el
 * endpoint de contacto contra abuso básico (spam, fuerza bruta).
 *
 * Limitación conocida: al vivir en memoria del proceso, no se comparte
 * entre instancias serverless. Para producción a mayor escala, sustituir
 * por un almacén compartido (p. ej. Upstash Redis + @upstash/ratelimit),
 * manteniendo la misma firma de `checkRateLimit`.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(identifier: string): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  const now = Date.now();
  const entry = hits.get(identifier);

  if (!entry || now > entry.resetAt) {
    hits.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { allowed: true };
}
