/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,js}",
    "./ExpressionEngineFiles/**/templates/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'core-sans': ['"Core Sans C"', 'sans-serif'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        'va': {
          'dark-blue': '#003A70',
          'medium-blue': '#006EB3',
          'light-blue': '#469DC8',
          'sky-blue': '#DEF5FF',
          'deep-blue': '#1C719B',
          'red': '#CE0037',
          'navy': '#0F2D52',
        }
      }
    },
  },
  plugins: [],
} 