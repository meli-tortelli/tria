const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-michroma)', ...fontFamily.serif],
        mono: ['var(--font-space)', ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {},
};
