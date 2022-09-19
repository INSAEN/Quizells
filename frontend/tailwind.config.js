/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        melon: "#F9ADA0",
        bright_pink: "#F9627D",
        purple: "#9C7CA5",
        bgdark: "#202124",
        txtgrey: "#979797",
        govtblue: "#093C7C",
        bgblue: "#2C67B2",
        logoblue: "#282C83",
        ltgrey: "#dedede",
        nadepink: "#ffafc5",
        amethyst: "#8b5fbf",
        celadon:"#98dfaf"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
