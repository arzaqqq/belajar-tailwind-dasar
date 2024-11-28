/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode : 'class',
  theme: {
    extend: {
      margin: {
        13 : '100px'
      },
      fontFamily: {
        oswald: 'Oswald',
        poppin : 'Poppins'
      },
      colors: {
        web: '#28166F'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fall'     : 'fall 10s infinite'
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '10%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: 1,
          },
        },
      }
    },
  },
  plugins: [],
}

