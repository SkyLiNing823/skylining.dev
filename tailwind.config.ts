import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#05070d",
        card: "#0b1020",
        ink: "#e5edf7",
        muted: "#94a3b8",
        line: "rgba(255,255,255,0.10)",
        ocean: "#7dd3fc",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 50px rgba(125, 211, 252, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
