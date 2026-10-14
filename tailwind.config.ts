import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        archival: {
          950: "#09090B",
          900: "#0F0F11",
          850: "#141417",
          800: "#1A1A1E",
          700: "#27272E",
          600: "#3F3F46",
          500: "#71717A",
          400: "#A1A1AA",
          300: "#D4D4D8",
          200: "#E4E4E7",
          100: "#F4F1EA",
          50: "#FAF7F2",
          paper: "#F7F4EE",
        },
        terracotta: {
          DEFAULT: "#C84B31",
          dark: "#9E3D22",
          light: "#E0583B",
          glow: "rgba(200, 75, 49, 0.25)",
        },
        ochre: {
          DEFAULT: "#E09F3E",
          dark: "#B87A24",
          light: "#F4B65B",
        },
        adire: {
          DEFAULT: "#1B2A4A",
          light: "#2E477D",
        },
        bronze: {
          DEFAULT: "#8C3B23",
          light: "#B2533E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Syne", "Cabinet Grotesk", "sans-serif"],
        editorial: ["var(--font-editorial)", "Newsreader", "Playfair Display", "serif"],
        mono: ["var(--font-mono)", "Space Mono", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        monumental: "-0.05em",
        archival: "0.12em",
      },
      maxWidth: {
        reading: "68ch",
        "8xl": "88rem",
        "9xl": "96rem",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        pulseSubtle: "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
