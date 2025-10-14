/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Work Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderImage: {
        'gradient-light': 'linear-gradient(to right, #3b82f6 0%, #1e293b 100%)', // blue to slate
        'gradient-dark': 'linear-gradient(to right, #fde68a 0%, #78350f 100%)', // yellow to brown
      },
      keyframes: {
        'gradient-flash': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'gradient-flash': 'gradient-flash 5s linear infinite',
      },
    },
  },
  plugins: [],
}
