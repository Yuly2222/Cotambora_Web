import { programs, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal } from "@/components/ui/Reveal";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderImage";

// Combinaciones de color que se van repitiendo por tarjeta mientras no hay
// foto real en esa posición (ver SiteImage). Al llegar todas las fotos,
// este arreglo deja de tener efecto visible.
const imagePairs: Array<{ main: PlaceholderVariant; secondary: PlaceholderVariant }> = [
  { main: "ink", secondary: "accent" },
  { main: "accent", secondary: "sand" },
  { main: "accent", secondary: "ink" },
  { main: "sand", secondary: "accent" },
];

export function Programs() {
  return (
    <section id="programas">
      <div className="bg-ink-900 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Nuestros grupos" title="Programas y agrupaciones" dark />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-sand-100/70 sm:text-base">
              Cada agrupación tiene su propia identidad sonora y escénica. Esta es una muestra de los
              grupos que hacen parte de la corporación; con el tiempo se irán sumando nuevos procesos.
            </p>
          </Reveal>
        </Container>
      </div>

      {programs.map((program, index) => {
        // El número, el color y la disposición de cada tarjeta se derivan
        // del índice: agregar un grupo nuevo a `content/site.ts` no
        // requiere tocar este componente.
        const number = String(index + 1).padStart(2, "0");
        const isDark = index % 2 === 1;
        const reversed = index % 4 >= 2;
        const { main, secondary } = imagePairs[index % imagePairs.length]!;
        const mainSrc = `/images/programas/${program.slug}-1.jpg`;
        const secondarySrc = `/images/programas/${program.slug}-2.jpg`;

        return (
          <article
            key={program.name}
            className={isDark ? "bg-ink-800 py-16 sm:py-24" : "bg-sand-100 py-16 sm:py-24"}
          >
            <Container>
              <span
                className={`block font-display text-5xl font-medium sm:text-6xl ${
                  isDark ? "text-sand-100" : "text-ink-900"
                }`}
              >
                {number}
              </span>

              <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                {isDark ? (
                  <Reveal className={`grid grid-cols-5 gap-3 sm:gap-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                    <SiteImage
                      src={mainSrc}
                      alt={program.name}
                      variant={main}
                      className="col-span-2 mt-8 aspect-[3/4] w-full rounded-sm sm:mt-10"
                    />
                    <SiteImage
                      src={secondarySrc}
                      alt={`${program.name} — ${program.category}`}
                      variant={secondary}
                      className="col-span-3 aspect-[4/5] w-full rounded-sm"
                    />
                  </Reveal>
                ) : (
                  <Reveal className={reversed ? "lg:order-2" : "lg:order-1"}>
                    <SiteImage
                      src={mainSrc}
                      alt={program.name}
                      variant={main}
                      className="aspect-[4/5] w-full rounded-sm border border-ink-100"
                    />
                  </Reveal>
                )}

                <Reveal
                  delay={120}
                  className={`flex flex-col items-start ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.2em] ${
                      isDark ? "text-accent-400" : "text-brand"
                    }`}
                  >
                    {program.category}
                  </p>
                  <h3
                    className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
                      isDark ? "text-sand-100" : "text-ink-900"
                    }`}
                  >
                    {program.name}
                  </h3>
                  <p
                    className={`mt-4 max-w-md text-base leading-relaxed ${
                      isDark ? "text-sand-100/70" : "text-ink-600"
                    }`}
                  >
                    {program.description}
                  </p>

                  {!isDark ? (
                    <SiteImage
                      src={secondarySrc}
                      alt={`${program.name} — ${program.category}`}
                      variant={secondary}
                      className="mt-6 aspect-[16/10] w-full max-w-sm rounded-sm border border-ink-100"
                    />
                  ) : null}

                  <a
                    href={program.href ?? siteConfig.social.youtubePlaylists}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline ${
                      isDark ? "text-accent-400" : "text-brand"
                    }`}
                  >
                    Conoce más sobre el grupo <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              </div>
            </Container>
          </article>
        );
      })}
    </section>
  );
}
