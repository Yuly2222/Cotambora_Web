import { heroContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";

export function Hero() {
  const [imageA, imageB] = heroContent.images;

  return (
    <section id="inicio" className="bg-ink-900 pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent-400">
          {heroContent.eyebrow}
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-sand-100 sm:text-7xl md:text-8xl">
            {heroContent.title}
          </h1>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <SiteImage
              src={imageA.src}
              alt={imageA.alt}
              variant={imageA.variant}
              priority
              className="col-span-1 aspect-[3/4] rounded-sm"
            />
            <SiteImage
              src={imageB.src}
              alt={imageB.alt}
              variant={imageB.variant}
              priority
              className="col-span-1 mt-8 aspect-[3/4] rounded-sm sm:mt-10"
            />
          </div>
        </div>

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
