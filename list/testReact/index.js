require('@babel/register')({
  presets: ['@babel/preset-react']
})

const ReactDomServer = require('react-dom/server')

const a = ReactDomServer.renderToString(
  require('./index.jsx')
)
console.log(a)