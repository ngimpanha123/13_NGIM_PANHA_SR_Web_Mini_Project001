/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kantumruy Pro"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#A9333A',      
          gold: '#EAB308',     
          bg: '#F8F9FA',      
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}