const app = require('./app')
const koa = new (require('koa'))
const mount = require('koa-mount')

Object.keys(app).forEach((routePath) => {
  koa.use(
    mount(routePath, async (ctx) => {
      ctx.status = 200
      ctx.body = await app[routePath](ctx.body)
    })
  )
})

koa.listen(3000)
