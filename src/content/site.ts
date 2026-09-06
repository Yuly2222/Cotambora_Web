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
  email: "contacto@cotambora.org",
  phone: "+57 300 000 0000",
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
  { href: "#aliados", label: "Aliados" },
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
} as const;

export type CulturalGroup = {
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
 * lista (ver `Programs.tsx`).
 */
export const programs: CulturalGroup[] = [
  {
    name: "Orquesta Tropical",
    category: "Música tropical",
    description:
      "Ensamble que fusiona ritmos tropicales del Caribe colombiano —cumbia, porro y salsa— en arreglos propios para escenarios y festivales.",
  },
  {
    name: "Carranga",
    category: "Música andina",
    description:
      "Agrupación que mantiene viva la carranga campesina, con tiple, guitarra, requinto y guacharaca, heredera de la tradición andina.",
  },
  {
    name: "Teatro",
    category: "Artes escénicas",
    description:
      "Colectivo de teatro comunitario que crea puestas en escena a partir de la memoria, la oralidad y las historias del territorio.",
  },
  {
    name: "Rock",
    category: "Música",
    description:
      "Banda que explora el rock desde una mirada local, tendiendo puentes entre la tradición cultural y la escena contemporánea.",
  },
  {
    name: "Danza",
    category: "Danza folclórica",
    description:
      "Grupo de danza dedicado a la investigación y puesta en escena de bailes tradicionales de la región.",
  },
  {
    name: "Batucada",
    category: "Percusión",
    description:
      "Batería de percusión que contagia de ritmo cada calle, plaza y escenario que recorre.",
  },
  {
    name: "Papayera",
    category: "Música de vientos",
    description:
      "Banda de vientos tradicional, infaltable en fiestas, desfiles y celebraciones populares.",
  },
];

export const galleryImages = [
  { id: 1, alt: "Presentación de danza tradicional" },
  { id: 2, alt: "Ensamble de percusión en vivo" },
  { id: 3, alt: "Taller de formación artística" },
  { id: 4, alt: "Festival cultural comunitario" },
  { id: 5, alt: "Instrumentos tradicionales" },
  { id: 6, alt: "Encuentro de agrupaciones culturales" },
] as const;

export const partners = [
  { id: 1, name: "Alcaldía Municipal" },
  { id: 2, name: "Ministerio de Cultura" },
  { id: 3, name: "Fundación Aliada" },
  { id: 4, name: "Casa de la Cultura" },
  { id: 5, name: "Red Cultural Regional" },
] as const;
