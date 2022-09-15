/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/Header.js',
    './src/components/Hero.js',
    './src/components/Main.js',
    './src/components/Tag.js',
  ],
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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
