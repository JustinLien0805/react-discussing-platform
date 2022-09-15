/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-rgba": "#090909",
      },
      fontFamily: {
        noto: ["Noto Serif Georgian", "serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
