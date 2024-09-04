/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'red': '0 8px 10px rgba(255, 0, 0, 0.5)'      }
    },
  },
  plugins: [],
  
}

