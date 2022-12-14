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
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
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
      xs: "9px",
      sm: "11px",
      base: "14px",
      md: "21px",
      lg: "24px",
      xl: "32px",
      xxl: "36px",
      xxxl: "48px",
    },
    extend: {
      lineHeight: {
        "leading-3": "0.875rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
