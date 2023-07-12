/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      ProductSans: ['Product-Sans', 'sans-serif'],
      ProductSansBold: ['Product-Sans-Bold', 'sans-serif'],
    },  
    extend: {
      colors: {
        "GDG-blue" : "#528DF3",
        "GDG-yellow" : "#FCBC05",
        "GDG-red" : "#EA4334",
        "GDG-green" : "#0D9D58",
        "GDG-lightblue" : "#50C1F5",
        "GDG-lightgreen" : "#16E7B4",
      },
    },
  },
  plugins: [],
}

