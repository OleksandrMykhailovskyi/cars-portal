import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': 'rgb(20 35 85 / 15%) 0px 2px 6px 0',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
