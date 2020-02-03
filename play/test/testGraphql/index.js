const query = require('./graphql')

query('{hello}').then((res) => {console.log(res)})

// 配合以下思路，就实现了使用 koa 和 graphql 构建的服务器。社区已经有了实现 koa-graphql
// app.use(async (ctx)=> {
//   const res = await query('{hello}')
//   ctx.body = res
// })