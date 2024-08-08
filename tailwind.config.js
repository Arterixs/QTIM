/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '375px',
        mlg: '1440px',
      },
      colors: {
        black: {
          qtim: '#101010',
          'qtim-light': '#232323',
        },
        gray: {
          qtim: '#868686',
          'qtim-light': '#F3F3F3',
        },
        green: {
          'qtim-light': '#9EFFBF',
        },
        purple: {
          qtim: '#7941A7',
        },
        pink: {
          qtim: '#E2BEFF',
        },
        blue: {
          qtim: '#1059C8',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
