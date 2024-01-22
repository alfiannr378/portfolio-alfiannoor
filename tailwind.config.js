/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
  extend: {
      colors: {
        primary: '#1e1b4b',
        secondary: '#111827',
        submit: '#6366f1',
        move: '#4f46e5',
        aktif: '#4338ca',
        yutup: '#FF0000',
        hijau: '#0e7490',
        darkGreen: '#006666',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
};

