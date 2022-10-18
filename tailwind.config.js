/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue : "#0f2a51",
      },
      colors: {
        darkBlue : "#0f2a51",
      }
    },
  },
  plugins: [],
}
