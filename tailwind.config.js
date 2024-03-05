/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      'light-color': '#ef233c',
      'primary-color': '#d90429',
      'dark-color': '#2b2d42',
      'black': '#000814',
      'gray': '#8d99ae',
      'white': '#edf2f4'
    },
    fontFamily: {
      "Poppins": ["Poppins", 'sans-serif']
    },
    extend: {
      fontFamily: {
        "Poppins": ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [],
}

