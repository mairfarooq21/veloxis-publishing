/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        's': {'max': '1680px'},
        'xs': {'max': '1350px'},
        'xxs': {'max': '430px'},
      },
    },
  },
  plugins: [],
}