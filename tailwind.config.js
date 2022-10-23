
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   
      backgroundColor: {
        darkBlue : "#2b498e",
      },
      colors: {
        darkBlue : "#2b498e",
      }
    },
  },
  plugins: [],
}
