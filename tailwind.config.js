/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"Bebas Neue"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
