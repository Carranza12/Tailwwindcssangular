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
        danger: colors.red,
        secondary : colors.yellow,
        alta : '#D32020',
        suave : '#79C349',
        moderada : '#F9972D'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

