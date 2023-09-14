import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        earth: "url('/img/earth.jpg')",
      },
      colors: {
        myPink: "#FBA1B7",
        myYellow: "#FFEECC",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
