const fs = require('fs')
const koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new koa()

// 如果匹配到静态文件，就在指定目录中返回。
// 如果没有这个逻辑，则所有的请求都会返回 source/index.htm
app.use(
  static(__dirname + '/source/')
)

const buffer = fs.readFileSync(__dirname + '/source/index.htm')
app.use(
  mount('/', async (ctx) => {
    ctx.status = 200
    // 如果 body 是 buffer 类型，可能会直接下载，所以需要指定类型。
    ctx.type = 'html'
    ctx.body = buffer
  })
)

// app.listen(4000)
module.exports = app
