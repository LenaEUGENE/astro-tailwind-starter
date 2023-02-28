const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      inter: "Inter var, sans-serif",
    },
    extend: {
      colors: {
        brand: "#F9A8D4",
        accent: "#C084FC",
        dark: "#1F2937",
        offWhite: "#FCF8F1",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
