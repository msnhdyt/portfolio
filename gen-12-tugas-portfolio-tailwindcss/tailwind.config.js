/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'jumbotron': 'rgb(131,146,146)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
