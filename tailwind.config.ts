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
        paper: "#eaf7ff",
        card: "rgba(255,255,255,0.58)",
        ink: "#12324a",
        muted: "#55758a",
        line: "rgba(255,255,255,0.48)",
        ocean: "#168dc5",
        slate: {
          50: "#102f46",
          100: "#183a53",
          200: "#244b63",
          300: "#355e75",
          400: "#53768a",
          500: "#718c9b",
          950: "#08283e",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(54, 126, 169, 0.14)",
        glow: "0 20px 70px rgba(77, 172, 224, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
