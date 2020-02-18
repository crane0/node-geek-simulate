const fs = require('fs')
const koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new koa()

// 如果匹配到静态文件，就在指定目录中返回。
// 如果没有这个逻辑，则所有的请求都会返回 source/index.htm
console.log(__dirname + '/source/')
app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
  })
)

// app.listen(4000)
module.exports = app
