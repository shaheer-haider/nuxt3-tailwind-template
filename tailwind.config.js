const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F1F4F8',
          light: '#F1F4F8',
          opacity: '#EBF7F2',
          light2: "#36B37E",
        },
        secondary: {
          light: '#5B758E',
          DEFAULT: '#163A5F',
          dark: '#2E4E6F',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        oleo: ['Oleo Script', 'cursive'],
      },
      fill: theme => theme('colors'),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
