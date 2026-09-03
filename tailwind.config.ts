import type { Config } from "tailwindcss";

/**
 * Design tokens. Paleta ancorada no azul real da marca (logo do cliente #002440).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Azul da marca — extraído do logo do cliente (#002440)
        navy: {
          DEFAULT: "#002440",
          hover: "#0a3a5e",
          50: "#eef5fb",
          100: "#dcebf5",
          200: "#a9cfe6",
          400: "#4a90c2",
          500: "#1e6ca8",
          600: "#14507c",
          700: "#0a3a5e",
          800: "#002440",
          900: "#001a2e",
        },
        // Azul de ação para CTAs (botões "Contratar/Cote já")
        azure: {
          DEFAULT: "#1e6ca8",
          hover: "#14507c",
        },
        gold: {
          DEFAULT: "#c7a77b",
          soft: "#e7d9c4",
        },
        surface: "#fbfaf8",
        line: "#e7e5e0",
        muted: "#5a6470",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        faq: "12px",
        btn: "10px",
        img: "20px",
      },
      boxShadow: {
        // Sombras em tom de marca (azul), nao o cinza generico
        card: "0 1px 2px rgba(0,36,64,0.05), 0 12px 28px -16px rgba(0,36,64,0.16)",
        "card-hover":
          "0 4px 10px rgba(0,36,64,0.07), 0 24px 48px -22px rgba(0,36,64,0.30)",
      },
      screens: {
        // Breakpoint principal do mockup (980px). Usamos como "desktop".
        desk: "980px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
