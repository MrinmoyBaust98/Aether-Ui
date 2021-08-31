module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        tomato: {
          500: '#F37172',
        }
      },
      font-family:{
        'Bhai' = [ 'Baloo Bhai 2', 'cursive' ]
      },
      
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
