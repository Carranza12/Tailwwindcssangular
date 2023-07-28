/**@type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        success: colors.green,
        'primary': '#0F172A',
        danger: colors.red
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

