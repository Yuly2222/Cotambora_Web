import { galleryImages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const variants = ["accent", "ink", "sand"] as const;

export function Gallery() {
  return (
    <section id="galeria" className="bg-sand-100 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Momentos" title="Galería" />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <PlaceholderImage
              key={image.id}
              label={image.alt}
              variant={variants[index % variants.length]}
              className={`aspect-square rounded-sm ${index === 0 ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square" : ""}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
