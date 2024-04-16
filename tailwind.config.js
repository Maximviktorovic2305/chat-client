/** @type {import('tailwindcss').Config} */
// const twColors = require("tailwindcss/colors");

// const colors = {
//    transparent: twColors.transparent,
//    black: "#2E3239",
//    gray: "#CDCDCD",
//    green: twColors.green[700],
//    green500: twColors.green[500],
//    gray200: twColors.gray[200],
//    red500: twColors.red[500],
//    white: twColors.white,
//    primary: "#FF9902",
//    secondary: "#161D25",
//    "bg-color": "#F2F2F5",
//    aqua: "#268697",
//    green: twColors.green[400],
//    aqua700: "#1b707f",
//    red: twColors.red[400],
// };

module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      // colors,
      extend: {
         keyframes: {
            animationOpacity: {
               from: { opacity: 0.2 },
               to: { opacity: 1 },
            },
            scaleIn: {
               "0%": {
                  opacity: 0,
                  transform: "scale(0.8)",
               },
               "50%": {
                  opacity: 0.3,
                  transform: "scale(0.9)",
               },
               "100%": {
                  opacity: 1,
                  transform: "scale(1)",
               },
            },
         },
         animation: {
            opacity: "animationOpacity .5s ease-in-out",
            scaleIn: "scaleIn .25s ease-in-out",
         },
      },
   },
   plugins: [require("daisyui")],   
   daisyui: {
      themes: ["dim"],
    },
};
