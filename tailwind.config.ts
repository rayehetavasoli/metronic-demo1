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
        "red-primary": "#f8285a",
        "icon-color": "#7a7a7a",

        "light-bg-primary": "#f4f4f4",
        "light-bg-secondary": "#e2e2e2",
        "light-bg-image": "#f9f9f9",
        "light-text-secondary" : "#4a4a4a",

        "dark-bg-primary": "#202123 ",
        "dark-bg-secondary": "#2C2D30 ",
        "dark-bg-image": "#333333",
        "dark-text-primary": "#CDCDCD",
        "dark-bg-table" : "#343434",
        "dark-odd-table":"#2E2E2F",
        "dark-even-table": "#29292C",
        
      },
    },
  },
  plugins: [],
};
export default config;
