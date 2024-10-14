import type { Config } from "tailwindcss";

const config: Config = {
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
      },
    },
  },
  plugins: [],
};
export default config;
