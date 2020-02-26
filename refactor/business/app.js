const fs = require('fs')

module.exports = {
  // '/detail': async function () {
  //   // rpc
  //   // render

  //   return 'detail page'
  // },
  
  // '/list': async function () {
  //   // rpc
  //   // render

  //   return 'list page'
  // },

  '/play': {
    data: require('./page.data'),
    template: fs.readFileSync(__dirname + '/play.template.html')
  },

}