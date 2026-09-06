import { siteConfig } from "@/content/site";

/**
 * Botón flotante fijo en la esquina inferior derecha que abre un chat de
 * WhatsApp con el número de la corporación. Vive en el layout raíz para
 * que aparezca en cualquier página del sitio, no solo en el inicio.
 */
export function WhatsAppButton() {
  const digits = siteConfig.phone.replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.32 4.95L2 22l5.2-1.36c1.44.79 3.07 1.2 4.84 1.2 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.2c-1.58 0-3.05-.43-4.32-1.19l-.31-.18-3.09.81.83-3.02-.2-.31a8.17 8.17 0 0 1-1.26-4.35c0-4.53 3.68-8.21 8.35-8.21 4.66 0 8.34 3.68 8.34 8.21s-3.68 8.24-8.34 8.24zm4.53-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
      </svg>
    </a>
  );
}
