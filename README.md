# Cotambora Web

Sitio web de la **Corporación Cultural Cotambora**, construido con [Next.js](https://nextjs.org) (App Router), TypeScript y Tailwind CSS. Pensado para desplegarse en [Vercel](https://vercel.com).

La estructura visual (header con hero grande, secciones numeradas, galería y logos de aliados) está inspirada en el template [Linas](https://builder.hostinger.com/templates?preview=linas) de Hostinger, ya adaptada a la paleta oficial de Cotambora. Los textos y las fotografías siguen siendo **contenido de marcador de posición** listos para reemplazarse por los definitivos — ver [Inventario de imágenes](#inventario-de-imágenes) más abajo.

## Stack

- **Next.js 16** (App Router, React Server Components)
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
2. **Colores de marca**: ya aplicados — ver [Paleta de marca](#paleta-de-marca). Para ajustarlos, edita los tokens `ink`, `accent`, `sand` y `brand` en [`tailwind.config.ts`](tailwind.config.ts); todos los componentes los consumen desde ahí.
3. **Tipografías**: cambia las fuentes de Google Fonts en [`src/app/layout.tsx`](src/app/layout.tsx).
4. **Imágenes**: agrega los archivos con el nombre exacto indicado en [Inventario de imágenes](#inventario-de-imágenes) dentro de `public/images/`. El componente `SiteImage` ya referencia esas rutas — en cuanto el archivo existe, se muestra automáticamente (antes de eso, se ve el bloque de color de repuesto, sin romper el diseño).
5. **Logo**: agrega el logo real (`public/images/logo.svg`) en el `Header` y el ícono del sitio (`src/app/icon.png`, convención de Next.js).

## Paleta de marca

Definida en [`tailwind.config.ts`](tailwind.config.ts) y aplicada en todo el sitio:

| Token Tailwind | Color | HEX | Uso principal |
| --- | --- | --- | --- |
| `brand` | 🟢 Verde Cotambora | `#176B45` | Header, footer, textos destacados ("eyebrow") y enlaces sobre fondo claro |
| `accent` | 🟡 Amarillo Tambor | `#F5B82E` | Botones de llamado a la acción, enlaces y numerales sobre fondo oscuro |
| `ink` | ⚫ Negro Escenario | `#171717` | Hero, tarjetas oscuras de "Programas", texto principal |
| `sand` | 🤍 Marfil Sabana | `#FFF8E8` | Fondo de las secciones claras (Nosotros, Galería, Contacto) |
| — | ⚪ Blanco | `#FFFFFF` | Fondos de tarjetas, inputs del formulario |

Por accesibilidad, el amarillo solo se usa como fondo sólido (con texto `ink-900` encima) o como texto sobre fondos oscuros — nunca como texto sobre fondo claro, donde el contraste es insuficiente.

## Inventario de imágenes

Todas las fotos van dentro de `public/images/` con el nombre exacto de esta tabla (formato `.jpg`, aunque `.png`/`.webp` también funcionan si ajustas la extensión en `src/content/site.ts`). No hace falta redimensionar con precisión: `next/image` las recorta y optimiza automáticamente; solo procura que la orientación (vertical/cuadrada) coincida con lo indicado.

| Sección | Archivo | Orientación recomendada | Tamaño mínimo sugerido |
| --- | --- | --- | --- |
| Nosotros | `public/images/nosotros.jpg` | Vertical (4:5) | 900×1125 px |
| Programas — Orquesta Tropical | `public/images/programas/orquesta-tropical-1.jpg` / `-2.jpg` | `-1` vertical (4:5), `-2` cuadrada | 1000×1250 px / 700×700 px |
| Programas — Carranga | `public/images/programas/carranga-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Programas — Teatro | `public/images/programas/teatro-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Programas — Rock | `public/images/programas/rock-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Programas — Danza | `public/images/programas/danza-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Programas — Batucada | `public/images/programas/batucada-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Programas — Papayera | `public/images/programas/papayera-1.jpg` / `-2.jpg` | igual que arriba | igual que arriba |
| Galería | `public/images/galeria/danza-tradicional.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Galería | `public/images/galeria/percusion-vivo.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Galería | `public/images/galeria/taller-formacion.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Galería | `public/images/galeria/festival-comunitario.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Galería | `public/images/galeria/instrumentos-tradicionales.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Galería | `public/images/galeria/encuentro-agrupaciones.jpg` | Cuadrada o apaisada | 1200×1200 px |
| Ícono del sitio (favicon) | `src/app/icon.png` (no va en `public/images`) | Cuadrada | 512×512 px |

**Para agregar un grupo cultural nuevo** (más allá de los 7 actuales): añade su objeto en el arreglo `programs` de [`src/content/site.ts`](src/content/site.ts) con un `slug` propio (p. ej. `"champeta"`), y sube sus fotos como `public/images/programas/champeta-1.jpg` y `champeta-2.jpg` — el número, el color y el diseño de la tarjeta se calculan solos.

**Para agregar una foto nueva a la galería**: añade un objeto `{ id, slug, alt }` al arreglo `galleryImages`, y sube `public/images/galeria/{slug}.jpg`.

**Inicio (Hero)**: el carrusel muestra las fotos de eventos subidas a Vercel Blob (ver sección siguiente). Si todavía no hay ninguna, usa como respaldo automático las fotos de `public/images/programas/` (ver [`Hero.tsx`](src/components/sections/Hero.tsx)).

## Fotos de eventos (carrusel del inicio)

A diferencia del resto de fotos del sitio (que van en `public/images/` y requieren un deploy para actualizarse), las fotos del carrusel de inicio se guardan en **Vercel Blob** — un almacenamiento de archivos del propio Vercel — para poder agregarlas o quitarlas en cualquier momento sin volver a desplegar la web.

El store ya está creado: **cotambora-web-blob** (Storage del proyecto en Vercel). Sus variables (`EVENTOSBLOB_STORE_ID` y `EVENTOSBLOB_READ_WRITE_TOKEN`) ya están conectadas al proyecto en Vercel y copiadas al `.env` local — no hace falta volver a configurarlas salvo que se cree un store nuevo.

**Si algún día se crea un store nuevo desde cero:**

1. En el dashboard de Vercel, ve a la pestaña **Storage** del proyecto → **Create Database** → **Blob**. Dale un nombre y conéctalo al proyecto.
2. Vercel agrega automáticamente las variables `<NOMBRE>_STORE_ID` y `<NOMBRE>_READ_WRITE_TOKEN` a Production/Preview/Development.
3. Para desarrollo local, copia esas mismas variables a tu `.env` (o `.env.local`): están en **Storage → tu store → pestaña ".env.local"**.
4. Actualiza el nombre de la variable de token en [`event-images.ts`](src/lib/event-images.ts) si cambia.

**Para agregar/quitar fotos de un evento (sin deploy):**

1. En **Storage → tu store → Browser**, sube las fotos dentro de una carpeta llamada `eventos/` (p. ej. `eventos/festival-cota-2026-1.jpg`, `eventos/festival-cota-2026-2.jpg`). El nombre exacto no importa — el sitio simplemente muestra, en orden alfabético, todo lo que encuentre bajo `eventos/`.
2. Para quitar una foto vieja, bórrala desde ese mismo Browser.
3. Refresca la página del sitio: el cambio se ve al instante, sin redeploy (las fotos se consultan en cada visita — ver [`event-images.ts`](src/lib/event-images.ts)).

Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Como con el resto del sitio, `next/image` optimiza y recorta automáticamente, así que no hace falta preprocesarlas.

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
