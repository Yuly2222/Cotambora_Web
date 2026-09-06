import { navLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-sand-100">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-sand-100/70">
          <p className="mb-1 font-medium uppercase tracking-wide text-sand-100/50">
            Navegación
          </p>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-400">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm text-sand-100/70">
          <p className="mb-1 font-medium uppercase tracking-wide text-sand-100/50">
            Contacto
          </p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-400">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-accent-400">
            {siteConfig.phone}
          </a>
          <div className="mt-2 flex gap-4">
            <a href={siteConfig.social.instagram} className="hover:text-accent-400" aria-label="Instagram">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} className="hover:text-accent-400" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </Container>

      <Container>
        <div className="border-t border-white/10 py-6 text-xs text-sand-100/50">
          © {year} {siteConfig.legalName}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
