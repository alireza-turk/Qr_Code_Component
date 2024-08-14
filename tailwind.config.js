/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {
      colors:{
        "primary-300": "hsl(212, 45%, 89%)",
        "primary-500": "hsl(216, 15%, 48%)",
        "primary-900": "hsl(218, 44%, 22%)",
      },
      fontFamily:{
        "Outfit-normal":'Outfit-normal',
        "Outfit-bold":'Outfit-bold'
      }
    },
  },
  plugins: [],
}

