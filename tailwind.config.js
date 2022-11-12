/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/./pages/**/*.{js,ts,jsx,tsx}",
    "./src/./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      lightGray: "#ebebeb",
      mediumGray: "#ededed",
      darkGray: "#dadada",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
    },
    fontSize: {
      sm: "11px",
      base: "11px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
