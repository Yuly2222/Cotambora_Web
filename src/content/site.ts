/**
 * Contenido y datos del sitio, centralizados en un solo lugar.
 *
 * Este archivo es el punto de partida para "adaptar la plantilla a la
 * marca": los textos, colores de marca (ver tailwind.config.ts) e imágenes
 * son de marcador de posición (placeholder) y deben reemplazarse por los
 * definitivos de la Corporación Cultural Cotambora.
 */

export const siteConfig = {
  name: "Cotambora",
  legalName: "Corporación Cultural Cotambora",
  tagline: "Cultura, memoria y tradición que se transmiten de generación en generación.",
  description:
    "La Corporación Cultural Cotambora promueve, preserva y proyecta las expresiones culturales, musicales y dancísticas de nuestra comunidad.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "corporacioncotambora@gmail.com",
  phone: "+57 314 348 4783",
  // Mensaje que llega precargado al abrir el chat desde el botón de WhatsApp.
  whatsappMessage: "Hola Cotambora, quiero más información.",
  address: "Dirección de la corporación, Ciudad, Colombia",
  social: {
    instagram: "https://instagram.com/cotambora",
    facebook: "https://facebook.com/cotambora",
    youtube: "https://youtube.com/@cotambora",
  },
} as const;

export const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#programas", label: "Programas" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const heroContent = {
  eyebrow: "Corporación Cultural",
  title: "Cotambora",
  description:
    "Somos una corporación cultural sin ánimo de lucro dedicada a preservar, fortalecer y proyectar las tradiciones musicales, dancísticas y ancestrales de nuestro territorio.",
  primaryCta: { label: "Conoce nuestros programas", href: "#programas" },
  secondaryCta: { label: "Contáctanos", href: "#contacto" },
} as const;

export const aboutContent = {
  eyebrow: "Nosotros",
  title: "Cultura viva, memoria colectiva",
  paragraphs: [
    "Desde nuestra fundación trabajamos junto a artistas, gestores culturales y comunidades para mantener vivas las tradiciones que nos identifican: la música de percusión, la danza y la oralidad.",
    "Creemos en la cultura como motor de desarrollo social: generamos espacios de formación, encuentro e investigación que fortalecen el tejido comunitario y proyectan nuestro patrimonio inmaterial hacia nuevas generaciones.",
  ],
  stats: [
    { value: "+10", label: "años de trabajo cultural" },
    { value: "+500", label: "artistas y gestores acompañados" },
    { value: "+30", label: "eventos y encuentros realizados" },
  ],
  image: { src: "/images/nosotros.jpg", alt: "Encuentro cultural comunitario" },
} as const;

export type CulturalGroup = {
  /** Usado para construir el nombre de archivo de sus imágenes: ver README. */
  slug: string;
  name: string;
  category: string;
  description: string;
  href?: string;
};

/**
 * Grupos y agrupaciones culturales de la corporación.
 *
 * Para agregar un grupo nuevo, basta con añadir un objeto al final del
 * arreglo: el número de orden, los colores y la disposición de imágenes de
 * cada tarjeta se calculan automáticamente a partir de la posición en la
 * lista (ver `Programs.tsx`). Las fotos se buscan en
 * `/public/images/programas/{slug}-1.jpg` (principal) y `{slug}-2.jpg`
 * (acento) — ver README > "Inventario de imágenes".
 */
export const programs: CulturalGroup[] = [
  {
    slug: "orquesta-tropical",
    name: "Orquesta Tropical",
    category: "Música tropical",
    description:
      "Ensamble que fusiona ritmos tropicales del Caribe colombiano —cumbia, porro y salsa— en arreglos propios para escenarios y festivales.",
  },
  {
    slug: "batucada",
    name: "Batucada",
    category: "Percusión",
    description:
      "Batería de percusión que contagia de ritmo cada calle, plaza y escenario que recorre.",
  },
  {
    slug: "rock",
    name: "Rock",
    category: "Música",
    description:
      "Banda que explora el rock desde una mirada local, tendiendo puentes entre la tradición cultural y la escena contemporánea.",
  },
  {
    slug: "carranga",
    name: "Carranga",
    category: "Música andina",
    description:
      "Agrupación que mantiene viva la carranga campesina, con tiple, guitarra, requinto y guacharaca, heredera de la tradición andina.",
  },
  {
    slug: "teatro",
    name: "Teatro",
    category: "Artes escénicas",
    description:
      "Colectivo de teatro comunitario que crea puestas en escena a partir de la memoria, la oralidad y las historias del territorio.",
  },
  {
    slug: "danza",
    name: "Danza",
    category: "Danza folclórica",
    description:
      "Grupo de danza dedicado a la investigación y puesta en escena de bailes tradicionales de la región.",
  },
  {
    slug: "papayera",
    name: "Papayera",
    category: "Música de vientos",
    description:
      "Banda de vientos tradicional, infaltable en fiestas, desfiles y celebraciones populares.",
  },
];

/**
 * Fotos de la galería. Cada una se busca en
 * `/public/images/galeria/{slug}.jpg` — ver README > "Inventario de imágenes".
 */
export const galleryImages = [
  { id: 1, slug: "danza-tradicional", alt: "Presentación de danza tradicional" },
  { id: 2, slug: "percusion-vivo", alt: "Ensamble de percusión en vivo" },
  { id: 3, slug: "taller-formacion", alt: "Taller de formación artística" },
  { id: 4, slug: "festival-comunitario", alt: "Festival cultural comunitario" },
  { id: 5, slug: "instrumentos-tradicionales", alt: "Instrumentos tradicionales" },
  { id: 6, slug: "encuentro-agrupaciones", alt: "Encuentro de agrupaciones culturales" },
] as const;
