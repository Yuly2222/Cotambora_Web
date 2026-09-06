import { aboutContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";

export function About() {
  return (
    <section id="nosotros" className="bg-sand-100 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SiteImage
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            variant="sand"
            className="aspect-[4/5] w-full rounded-sm border border-ink-100"
          />

          <div>
            <SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.title} />

            <div className="mt-6 space-y-4">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink-100 pt-8">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-brand sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-ink-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
