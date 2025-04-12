/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        lightblue: '#E6F2FF',
        darkblue: '#003366',
        skyblue: '#87CEEB',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      }
    }
  },
  plugins: [],
}