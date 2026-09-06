"use client";

import { useEffect, useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import type { PlaceholderVariant } from "@/components/ui/PlaceholderImage";

export type CarouselSlide = {
  src: string;
  alt: string;
  variant?: PlaceholderVariant;
};

/**
 * Carrusel simple, sin dependencias externas. Solo monta la foto activa
 * (no todas a la vez) para no forzar la descarga de todo el álbum al
 * cargar la página — importante aquí porque las fotos vienen directo de
 * /public/images sin comprimir previamente.
 */
export function Carousel({
  slides,
  intervalMs = 4500,
  className = "",
  sizes,
}: {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, count, intervalMs]);

  if (count === 0) return null;

  const goTo = (target: number) => setIndex(((target % count) + count) % count);
  const slide = slides[index]!;

  return (
    <div
      className={`group relative overflow-hidden rounded-sm bg-ink-800 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotografías de nuestros grupos culturales"
    >
      <SiteImage
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        variant={slide.variant}
        priority={index === 0}
        sizes={sizes}
        className="h-full w-full"
      />

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900/60 text-lg text-sand-100 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900/60 text-lg text-sand-100 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 sm:bottom-4">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la foto ${i + 1} de ${count}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent-500" : "w-1.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
