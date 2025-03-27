/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    darkMode: 'media',
    darkMode: 'class',
  //   screens: {
  //   'tablet': '640px',
  //   // => @media (min-width: 640px) { ... }

  //   'laptop': '1024px',
  //   // => @media (min-width: 1024px) { ... }

  //   'desktop': '1280px',
  //   // => @media (min-width: 1280px) { ... }
  // },
    
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
  // corePlugins: {
  //   // ...
  //  overscrollBehavior: false,
  // }

}

