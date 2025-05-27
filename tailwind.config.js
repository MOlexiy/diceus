/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        '2k': '2560px',
        '4k': '3840px',
      },
    },
  },
  plugins: [],
}

