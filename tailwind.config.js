/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 992px) { ... }
      },
    },

  },
  plugins: [],
}

