// craco.config.js
const cracoAlias = require('craco-alias')
module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './',
        source: 'jsconfig',
      },
    },
  ],
}
