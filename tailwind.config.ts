import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-slab)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-roboto-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        warm: {
          50: "#F3EEE2",
          100: "#e7e2d8",
          200: "#b4b1a8",
          300: "#97938c",
          400: "#7a7771",
          500: "#5e5c57",
          600: "#44423e",
          700: "#2b2a27",
          800: "#141412",
          900: "#030303",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
