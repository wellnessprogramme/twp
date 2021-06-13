const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: { 
        primary: '#53ba6d',

       }
    }
  },
  plugins: []
}
