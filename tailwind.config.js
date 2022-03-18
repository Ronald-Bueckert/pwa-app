module.exports = {
  content: ["./src/**/*.{js,html}",],
  theme: {
    extend: {
      width: {
        '640' : '640px'
      },
      scale: {
        '102' : '1.02'
      },
      zindex: {
        '1' : '1'
      },
      colors:{
        'bluegray-900' : 'rgb(15,13,42)',
        'bluegray-800' : 'rgb(30,31,59)',
        'bluegray-700' : 'rgb(51,56,85)',
        'bluegray-600' : 'rgb(71,76,105)',
        'bluegray-500' : 'rgb(100,107,139)'
      }
    },
  },
  plugins: [],
}
