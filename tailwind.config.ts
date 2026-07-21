import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
        },
        foreground: {
          0: "var(--foreground-0)",
          1: "var(--foreground-1)",
          2: "var(--foreground-2)",
          3: "var(--foreground-3)",
        },
        accent: "var(--accent)",
        beige: {
          950: "var(--beige-950)",
        },
        maroon: {
          900: "var(--maroon-900)",
          950: "var(--maroon-950)",
        },
        marketing: {
          "surface-0": "var(--marketing-surface-0)",
          "surface-1": "var(--marketing-surface-1)",
          "foreground-0": "var(--marketing-foreground-0)",
          "foreground-1": "var(--marketing-foreground-1)",
          "foreground-2": "var(--marketing-foreground-2)",
        },
        neutral: {
          875: "var(--neutral-875)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-alternate)", "sans-serif"],
      },
      borderRadius: {
        "2lg": "12px",
      },
      keyframes: {
        "scroll-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        progress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "scale(1.01)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "scroll-horizontal": "scroll-horizontal 30s linear infinite",
        progress: "progress 5s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
