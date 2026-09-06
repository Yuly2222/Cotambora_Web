import { galleryImages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderImage";

const variants: PlaceholderVariant[] = ["accent", "ink", "sand"];

export function Gallery() {
  return (
    <section id="galeria" className="bg-sand-100 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Momentos" title="Galería" />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <SiteImage
              key={image.id}
              src={`/images/galeria/${image.slug}.jpg`}
              alt={image.alt}
              variant={variants[index % variants.length]}
              sizes="(min-width: 768px) 33vw, 50vw"
              className={`aspect-square rounded-sm ${index === 0 ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square" : ""}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
