import { partners } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Partners() {
  return (
    <section id="aliados" className="bg-ink-900 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Trabajamos con" title="Aliados y colaboradores" dark align="center" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((partner) => (
            <span
              key={partner.id}
              className="font-display text-lg font-medium text-sand-100/50 transition-colors hover:text-sand-100/90"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
