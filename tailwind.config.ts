import type { Config } from "tailwindcss";

// Paleta oficial de la Corporación Cultural Cotambora. Todos los
// componentes consumen los colores desde aquí, así que para ajustar la
// marca en el futuro basta con actualizar estos tokens.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Negro Escenario — secciones oscuras, contraste, texto principal.
        ink: {
          DEFAULT: "#171717",
          50: "#FAFAFA",
          100: "#E5E5E5",
          400: "#5C5C5C",
          600: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Amarillo Tambor — energía, ritmo, llamados a la acción.
        accent: {
          DEFAULT: "#F5B82E",
          50: "#FEF6E7",
          100: "#FCEAC0",
          400: "#F7C658",
          500: "#F5B82E",
          600: "#D89A12",
        },
        // Marfil Sabana — fondos cálidos y naturales.
        sand: {
          DEFAULT: "#FFF8E8",
          100: "#FFF8E8",
          200: "#F3E7C9",
        },
        // Verde Cotambora — color principal de marca (identidad institucional).
        brand: {
          DEFAULT: "#176B45",
          50: "#E8F2ED",
          400: "#1F8558",
          500: "#176B45",
          600: "#125536",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
