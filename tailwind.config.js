/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'portfolio1':"url(./src/assets/portfolio1.png)",
        'portfolio2':"url(./src/assets/portfolio2.png)",
        'portfolio3':"url(./src/assets/portfolio3.png)",
      }
    },
  },
  plugins: [],
}

