module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'my-grey-blue':'#14253d',
        'my-grey-blue-hover':'#14256C',
        'my-dark-blue':'#002b49',
        'my-opt-3':'#2a2e35'
      },
      spacing:{
        120:'30rem',
        140:'35rem',
      },
      zIndex:{
        '-10':'-10',
        '-1':'-1',
        '-2':'-2'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive','hover'],
    },
  },
  plugins: [],
}