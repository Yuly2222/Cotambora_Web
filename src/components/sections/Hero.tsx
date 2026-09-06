import { heroContent, programs } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Carousel, type CarouselSlide } from "@/components/ui/Carousel";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderImage";

const variants: PlaceholderVariant[] = ["accent", "ink", "sand"];

// El carrusel del hero muestra las fotos que ya están cargadas en
// "Programas" (public/images/programas/) — no requiere fotos propias.
// Al agregar un grupo nuevo a `programs`, sus fotos entran solas al
// carrusel, en el mismo orden.
const heroSlides: CarouselSlide[] = programs.flatMap((program, i) => [
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

export function Hero() {
  return (
    <section id="inicio" className="bg-ink-900 pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent-400">
          {heroContent.eyebrow}
        </p>

        <Carousel
          slides={heroSlides}
          intervalMs={2000}
          sizes="100vw"
          className="aspect-video w-full"
        />

        <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-sand-100 sm:mt-10 sm:text-7xl md:text-8xl">
          {heroContent.title}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
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
        </div>
      </Container>
    </section>
  );
}
