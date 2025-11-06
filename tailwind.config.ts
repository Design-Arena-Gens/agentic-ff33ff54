import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#d7e3ff",
          200: "#b3c4ff",
          300: "#8fa4ff",
          400: "#6b85ff",
          500: "#4b68f2",
          600: "#324ed5",
          700: "#253fa8",
          800: "#1a2f7a",
          900: "#101f4d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
