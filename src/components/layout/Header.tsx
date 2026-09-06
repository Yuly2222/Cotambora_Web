"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import siteIcon from "@/app/icon.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-sand-100 sm:text-xl"
        >
          <Image
            src={siteIcon}
            alt=""
            width={56}
            height={56}
            priority
            className="h-8 w-8 rounded-sm sm:h-9 sm:w-9"
          />
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand-100/80 transition-colors hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-sand-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <nav id="mobile-menu" className="border-t border-white/10 bg-brand md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-sand-100/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
