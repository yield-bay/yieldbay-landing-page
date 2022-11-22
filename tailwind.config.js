const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseBlue: "#000E23",
        baseBlueMid: "#011433",
        baseBlueDark: "#010E23",
        primaryBlue: "#3780FF",
        primaryWhite: "#EEF1FC",
        blueSilver: "#E2E8FF",
        bodyGray: "#EEF1FC",
        mediumGray: "#838383",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        spaceGrotesk: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        tooltipLight: "0px 0px 5px #A2C4FF",
        tooltipDark: "0px 0px 5px #3780FF",
      },
      animation: {
        shiny: "shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};
