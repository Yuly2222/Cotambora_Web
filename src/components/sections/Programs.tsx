import { programs } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Programs() {
  return (
    <section id="programas" className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Qué hacemos" title="Nuestros programas" dark />

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {programs.map((program) => (
            <article
              key={program.number}
              className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-[auto_1fr_1fr] md:gap-12"
            >
              <span className="font-display text-2xl font-medium text-accent-400 md:text-3xl">
                {program.number}
              </span>

              <div>
                <h3 className="font-display text-2xl font-semibold text-sand-100 sm:text-3xl">
                  {program.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-100/70 sm:text-base">
                  {program.description}
                </p>
              </div>

              <PlaceholderImage
                label={program.title}
                variant="ink"
                className="aspect-video w-full rounded-sm md:aspect-[4/3]"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
