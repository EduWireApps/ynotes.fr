const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c9ccea",
          200: "#9299d6",
          300: "#5c66c1",
          400: "#3a4398",
          500: "#252b62",
          600: "#20234F",
          700: "#181B3D",
          800: "#11132B",
          900: "#0A0B19",
        },
      },
      fontFamily: {
        sans: ["Asap", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
