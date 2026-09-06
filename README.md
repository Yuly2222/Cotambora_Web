# Cotambora Web

Sitio web de la **Corporación Cultural Cotambora**, construido con [Next.js](https://nextjs.org) (App Router), TypeScript y Tailwind CSS. Pensado para desplegarse en [Vercel](https://vercel.com).

La estructura visual (header oscuro con hero grande, secciones numeradas, galería y logos de aliados) está inspirada en el template [Linas](https://builder.hostinger.com/templates?preview=linas) de Hostinger. Todos los textos, colores e imágenes son **contenido de marcador de posición** (placeholder) listos para reemplazarse por la marca definitiva de Cotambora.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** en modo estricto
- **Tailwind CSS** para estilos
- **Zod** para validación de formularios
- Despliegue recomendado: **Vercel**

## Primeros pasos

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Entorno de desarrollo con recarga en caliente |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter (ESLint + reglas de Next.js) |
| `npm run typecheck` | Verificación de tipos de TypeScript |

## Estructura del proyecto

```
src/
  app/                  Rutas (App Router), layout, metadata, API routes
    api/contact/        Endpoint del formulario de contacto
  components/
    layout/             Header y Footer
    sections/           Secciones de la página (Hero, Nosotros, Programas, ...)
    ui/                 Componentes reutilizables (Container, SectionHeading, ...)
  content/site.ts        Todo el contenido/copy y datos del sitio, centralizados
  lib/                   Validaciones (zod) y utilidades (rate limit)
middleware.ts             Content-Security-Policy con nonce por solicitud
```

### Cómo adaptar la plantilla a la marca

1. **Contenido y datos**: edita [`src/content/site.ts`](src/content/site.ts) (nombre, textos, programas, redes sociales, datos de contacto).
2. **Colores de marca**: edita los tokens `ink`, `accent` y `sand` en [`tailwind.config.ts`](tailwind.config.ts). Todos los componentes los consumen desde ahí.
3. **Tipografías**: cambia las fuentes de Google Fonts en [`src/app/layout.tsx`](src/app/layout.tsx).
4. **Imágenes**: sustituye los componentes `PlaceholderImage` por `next/image` apuntando a archivos reales en `public/images/`.
5. **Logo**: agrega el logo real en el `Header` y el ícono del sitio (`app/icon.png` o `app/favicon.ico`).

## Formulario de contacto

El endpoint `POST /api/contact` (`src/app/api/contact/route.ts`) incluye:

- Validación de datos con **Zod** (nombre, correo, mensaje).
- Campo **honeypot** anti-spam (invisible para personas).
- **Rate limiting** básico por IP (5 solicitudes/minuto) para mitigar abuso.
- Envío de correo opcional vía [Resend](https://resend.com): configura `RESEND_API_KEY` y `CONTACT_EMAIL_TO` en las variables de entorno. Sin esas variables, el endpoint valida y registra el mensaje en el log del servidor (útil en desarrollo).

> **Nota de escalabilidad**: el rate limiter actual vive en memoria del proceso, por lo que en un despliegue serverless con múltiples instancias el límite no se comparte globalmente. Para tráfico alto en producción, sustituir `src/lib/rate-limit.ts` por un almacén compartido como Upstash Redis (`@upstash/ratelimit`), manteniendo la misma firma de función.

## Seguridad

- **Cabeceras de seguridad** (`next.config.mjs`): `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`.
- **Content-Security-Policy estricta con nonce** (`middleware.ts`), siguiendo el patrón recomendado por Next.js: `default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`, sin dominios externos de script.
- **Validación de entradas** con Zod en el servidor (nunca solo en el cliente).
- **Sin secretos en el repositorio**: `.env.local` está en `.gitignore`; usa `.env.example` como referencia y configura las variables reales en Vercel (Project Settings → Environment Variables).
- **TypeScript estricto** y ESLint (`next/core-web-vitals`) para detectar errores antes de producción.

Antes de publicar el sitio, revisa también:

- Reemplazar los datos de contacto de ejemplo (`src/content/site.ts`) por los reales.
- Configurar un dominio propio y forzar HTTPS (Vercel lo hace automáticamente).
- Si se agregan imágenes externas (CMS, CDN), añadir el dominio a `images.remotePatterns` en `next.config.mjs` en lugar de desactivar la optimización de imágenes.

## Despliegue en Vercel

1. Sube el repositorio a GitHub (ya está conectado a `Yuly2222/Cotambora_Web`).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio — Vercel detecta Next.js automáticamente, no requiere configuración adicional.
3. Define las variables de entorno de `.env.example` en Project Settings → Environment Variables (al menos `NEXT_PUBLIC_SITE_URL` con el dominio final).
4. Cada push a `main` genera un despliegue de producción; cada pull request genera un *preview deployment* automático.

## Escalabilidad

- Arquitectura por secciones/componentes: agregar una página nueva es crear una carpeta bajo `src/app/` (App Router habilita rutas anidadas, layouts y carga progresiva sin configuración extra).
- Contenido centralizado en `src/content/`, listo para migrarse a un CMS headless (Sanity, Contentful, etc.) sin tocar los componentes visuales.
- Imágenes optimizadas automáticamente vía `next/image` cuando se reemplacen los placeholders.
- `sitemap.ts` y `robots.ts` generan SEO técnico automáticamente; al agregar páginas nuevas, súmalas al arreglo de `sitemap.ts`.
