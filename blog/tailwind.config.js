/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Header.js', './src/components/Hero.js'],
  theme: {
    extend: {
      colors: {
        green: '#5CB85B',
        grey: '#B2B2B2',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
