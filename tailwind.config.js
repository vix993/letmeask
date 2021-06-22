module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'rob': ['Roboto', 'sans-serif'],
      'pop': ['Poppins', 'sans-serif']
    },
    flex: {
      '7': '7',
      '8': '8'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
