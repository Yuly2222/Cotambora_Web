"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceholderImage, type PlaceholderVariant } from "@/components/ui/PlaceholderImage";

/**
 * Imagen del sitio con reemplazo automático.
 *
 * Referencia una foto real en /public/images por su ruta (`src`). Mientras
 * ese archivo no exista, o si falla al cargar, se muestra en su lugar el
 * bloque de color `PlaceholderImage` — así el sitio nunca se ve roto y el
 * cambio a fotos reales es tan simple como agregar el archivo con el
 * nombre correcto (ver README, sección "Inventario de imágenes").
 */
export function SiteImage({
  src,
  alt,
  className = "",
  variant = "accent",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  variant?: PlaceholderVariant;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <PlaceholderImage label={alt} variant={variant} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
