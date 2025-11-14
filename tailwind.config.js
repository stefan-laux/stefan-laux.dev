/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '25': '0.25',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-polygon': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        },
        '.clip-path-polygon-top': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        },
        '.clip-path-polygon-center': {
          'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 