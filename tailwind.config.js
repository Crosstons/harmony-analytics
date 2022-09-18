/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'extreme': '#1e2528',
        'hot': '#3a504b',
        'spicy': '#0ef6be',
        'mild': '#f7f7f7',
        'sss': '#283136',
      }
      ,fontFamily: {
        barlow: "'Barlow', sans-serif",
      }
    },
  },
  plugins: [],
}
