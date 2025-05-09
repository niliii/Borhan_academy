/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // فقط یکبار کافی‌ه
  theme: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },

        // رنگ متن پیش‌فرض برای حالت دارک
        'html.dark body': {
          color: theme('colors.white'),
        },
      });
    }),
  ],
};
