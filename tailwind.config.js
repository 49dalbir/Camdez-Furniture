/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'franklin': ['"Libre Franklin"', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      screens: {
        'max-sm': {'max': '640px'},  
        'max-md': {'max': '768px'},   
        'max-lg': {'max': '1024px'},  
      },
    },
  },
  plugins: [],
}