/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
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
        white: 'var(--white)',
        black: {
          qtim: 'var(--black)',
          'qtim-light': 'var(--black-light)',
        },
        gray: {
          qtim: 'var(--gray)',
          'qtim-hover': 'var(--gray-hover)',
          'qtim-light': 'var(--gray-light)',
        },
        green: {
          'qtim-light': 'var(--green-light)',
        },
        purple: {
          qtim: 'var(--purple)',
        },
        pink: {
          qtim: 'var(--pink)',
        },
        blue: {
          qtim: 'var(--blue)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
