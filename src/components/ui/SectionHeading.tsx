export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-medium uppercase tracking-[0.2em] ${
            dark ? "text-accent-400" : "text-accent-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-sand-100" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
