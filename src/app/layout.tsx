import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { headers } from "next/headers";
import { siteConfig } from "@/content/site";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fuerza renderizado dinámico por request: el middleware genera un nonce
  // distinto en cada request para la CSP, así que la página no puede
  // quedar prerenderizada de forma estática con un nonce fijo (o ausente),
  // o el navegador bloqueará los scripts por no coincidir con el header CSP.
  await headers();

  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
