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
      gray1: "#ededed",
      gray2: "#ebebeb",
      gray3: "#dadada",
      gray4: "#d6d6d6",
      gray5: "#c7c7c7",
      gray6: "#bdbdbd",
      gray7: "#4a4a4a",
      gray8: "#363636",
      gray9: "#2e2e2e",
      gray10: "#161615",
      gray11: "#121212",
      black: "#000000",
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
