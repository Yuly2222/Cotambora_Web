export type PlaceholderVariant = "accent" | "ink" | "sand";

/**
 * Bloque de marcador de posición para fotografías reales.
 * Sustituir por `next/image` apuntando a los archivos definitivos en
 * /public/images cuando estén disponibles.
 */
export function PlaceholderImage({
  label,
  className = "",
  variant = "accent",
}: {
  label: string;
  className?: string;
  variant?: PlaceholderVariant;
}) {
  const variants: Record<PlaceholderVariant, string> = {
    accent: "from-accent-500/80 to-ink-900",
    ink: "from-ink-600 to-ink-900",
    sand: "from-sand-200 to-sand-100",
  };

  const textColor = variant === "sand" ? "text-ink-600" : "text-sand-100/90";

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${variants[variant]} ${className}`}
    >
      <span
        className={`m-4 text-xs font-medium uppercase tracking-wide ${textColor} sm:m-6`}
      >
        {label}
      </span>
    </div>
  );
}
