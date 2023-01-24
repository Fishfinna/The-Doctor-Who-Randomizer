/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      DoctorWho: ["logo-font.ttf"],
    },
  },
  plugins: [require("@tailwindcss/typeography")],
};
