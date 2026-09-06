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

export const programs = [
  {
    number: "01",
    title: "Formación artística",
    description:
      "Talleres y escuelas de música, percusión y danza tradicional dirigidos a niños, jóvenes y adultos de la comunidad.",
  },
  {
    number: "02",
    title: "Festivales y encuentros",
    description:
      "Organización de festivales culturales que reúnen a agrupaciones locales, regionales y nacionales para celebrar nuestras tradiciones.",
  },
  {
    number: "03",
    title: "Memoria e investigación",
    description:
      "Procesos de documentación e investigación del patrimonio cultural inmaterial, con enfoque en la tradición oral y musical.",
  },
] as const;

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
