/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        russo: ['"Russo One"', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
        fredoka: ['"Fredoka"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        carter: ['"Carter One"', 'cursive'],
        signika: ['"Signika Negative"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}