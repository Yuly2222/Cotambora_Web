import { heroContent, programs } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Carousel, type CarouselSlide } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderImage";

const variants: PlaceholderVariant[] = ["accent", "ink", "sand"];

// Fotos de eventos del carrusel: archivos en public/images/eventos/.
// Para cambiarlas, sube el archivo y edita esta lista. Si queda vacía,
// se usan como respaldo las fotos de "Programas".
const eventPhotos = ["evento-1.png", "evento-2.png", "evento-3.png"];

const fallbackSlides: CarouselSlide[] = programs.flatMap((program, i) => [
  {
    src: `/images/programas/${program.slug}-1.jpg`,
    alt: `${program.name} — fotografía 1`,
    variant: variants[(i * 2) % variants.length],
  },
  {
    src: `/images/programas/${program.slug}-2.jpg`,
    alt: `${program.name} — fotografía 2`,
    variant: variants[(i * 2 + 1) % variants.length],
  },
]);

const heroSlides: CarouselSlide[] =
  eventPhotos.length > 0
    ? eventPhotos.map((file, i) => ({
        src: `/images/eventos/${file}`,
        alt: `Evento Cotambora — fotografía ${i + 1}`,
        variant: variants[i % variants.length],
      }))
    : fallbackSlides;

export function Hero() {

  return (
    <section id="inicio" className="bg-ink-900 pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container>
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent-400">
            {heroContent.eyebrow}
          </p>

          <Carousel
            slides={heroSlides}
            // Las fotos de eventos pesan bastante: un intervalo corto las corta
            // a mitad de carga y se ve la foto en negro. 6s da margen suficiente.
            intervalMs={6000}
            sizes="100vw"
            className="aspect-video w-full"
          />
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-sand-100 sm:mt-10 sm:text-7xl md:text-8xl">
            {heroContent.title}
          </h1>
        </Reveal>

        <Reveal delay={240} className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl text-base leading-relaxed text-sand-100/75 sm:text-lg">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center rounded-sm bg-accent-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent-600"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-3 text-sm font-medium text-sand-100 transition-colors hover:border-white/40"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
