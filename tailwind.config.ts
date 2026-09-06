import type { Config } from "tailwindcss";

// Paleta de marcador de posición (placeholder). Al adaptar el sitio a la
// identidad visual definitiva de Cotambora, basta con actualizar estos
// tokens: todos los componentes consumen los colores desde aquí.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          50: "#F4F5F7",
          100: "#E4E7EC",
          400: "#5B6472",
          600: "#333B47",
          800: "#141C2B",
          900: "#0B1220",
        },
        accent: {
          DEFAULT: "#C1502E",
          50: "#FBEEE8",
          100: "#F5D8C9",
          400: "#D97A56",
          500: "#C1502E",
          600: "#A23F22",
        },
        sand: {
          DEFAULT: "#F6F1E9",
          100: "#FBF8F3",
          200: "#F0E8DA",
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
