/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'anton': ['Anton', 'Sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },

  plugins: [],
}