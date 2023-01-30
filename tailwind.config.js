/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        CNY: ['Ma Shan Zheng', 'cursive'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
