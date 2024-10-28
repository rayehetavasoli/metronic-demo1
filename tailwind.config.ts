import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    extend: {
      width: ["important"],
      height: ["important"],
    },
  },
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        "blue-primary": "#1b84ff",
        "gray-300" : "#868686",
        "gray-400" : "#5f5f5f",
      },
    },
  },
  plugins: [],
};
export default config;
