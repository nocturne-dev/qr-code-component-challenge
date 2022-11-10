/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "gray-light": "hsl(212, 45%, 89%)",
      "blue-grayish": "hsl(220, 15%, 55%)",
      "blue-dark": "hsl(218, 44%, 22%)",
      "blue-footer": "hsl(228, 45%, 44%)",
    },

    fontFamily: {
      outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      footer: "12px",
      base: [
        "15px",
        {
          fontWeight: "400",
        },
      ],
      heading: [
        "23px",
        {
          fontWeight: "700",
        },
      ],
    },

    screens: {
      "mobile-sm": "320px",
      "mobile-md": "375px",
      "mobile-lg": "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },

    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
