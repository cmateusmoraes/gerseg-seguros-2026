import type { Config } from "tailwindcss";

/**
 * Design tokens extraídos do mockup canônico (conteudo/08-seguro-bike.md).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d1b3d",
          hover: "#13295f",
        },
        gold: "#b59672",
        surface: "#f8f8f8",
        line: "#ececec",
        muted: "#666666",
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
