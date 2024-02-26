/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      'light-color': '#ffd60a',
      'primary-color': '#ffc300',
      'dark-primary': '#003566',
      'dark-color': '#001d3d',
      'black': '#000814',
      'gray': '#808080',
      'white': '#FEFEFA'
    },
    fontFamily: {
      "Nunito": ["Nunito", 'sans-serif']
    },
    extend: {
      fontFamily: {
        "Nunito": ["Nunito", 'sans-serif']
      },
    },
  },
  plugins: [],
}

