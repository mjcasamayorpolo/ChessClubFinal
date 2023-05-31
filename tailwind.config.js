/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'main': '#f5f5f7',
        'secondary': '#fff',
        'main-text': '#2a2a2a',
        'secondary-text': '#8c8c9f',
        'gray': 'gray'
      },
      screens: {
        'xs': '0px',
        's': '576px',
        'm': '768px',
        'l': '992px',
        'xl': '1200px'
      },
      spacing: {
        '08': '0.8em',        
        '5625': '56.25%',
        '90': '90%',
        '10': '10px',
        '15': '15px',
        '18': '18rem',
        '30': '30px',
        '320': '320px',
        '480': '480px',
        '540': '540px',
        '760': '760px'        
      },
      fontSize: {
        '1': '1.1em',
        's': '1.5em',
        'ssm': 'calc(1rem + .2vw)',
        'sm': 'calc(1rem + .6vw)',
        'm': 'calc(1em + 1vw)',
        'ml': '2rem',
        'l': 'calc(1em + 2vw)'
      },
      fontFamily: {
        'sans-serif': ['Montserrat-regular', "Segoe UI", "roboto",
        "Helvetica Neue", "arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol"],
        'secondary-title': ['Montserrat-semibold'] 
      },
      maxWidth: {
        '800': '800px'
      },
      lineHeight: {
        '18': '18px'
      },
      borderRadius: {
        '50': '50%'
      },
      gridTemplateColumns: {
        '1-2': '1fr 2fr'
      },
      gridTemplateRows: {
        '1-2': '1fr 2fr'
      }
    },
  },
  plugins: [],
}

