const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#53ba6d',
        ...colors
      }
    }
  },
  plugins: []
}
