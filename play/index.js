const fs = require('fs');
const Koa = require('koa');
const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new Koa();

const mockDatabase = {
  1: {
    id: 1,
    avatar: 'https://static001.geekbang.org/account/avatar/00/19/19/a0/84f95280.jpg',
    name: 'Jng',
    isTop: true,
    content: '你最帅了～',
    publishDate: '今天',
    commentNum: 11,
    praiseNum: 5
  },
  2: {
    id: 2,
    avatar: 'https://static001.geekbang.org/account/avatar/00/19/19/a0/84f95280.jpg',
    name: 'Junting',
    isTop: true,
    content: '你最帅了～',
    publishDate: '今天',
    commentNum: 10,
    praiseNum: 5
  },
  3: {
    id: 3,
    avatar: 'https://static001.geekbang.org/account/avatar/00/19/19/a0/84f95280.jpg',
    name: 'Jucrng',
    isTop: true,
    content: '你最帅了～',
    publishDate: '今天',
    commentNum: 10,
    praiseNum: 5
  }
}


const rootComment = {
  // 取数据
  comment: () => {
    return Object.keys(mockDatabase).map(key => mockDatabase[key])
  },
  // 更改数据
  praise: ({id}) => {
    mockDatabase[id].praiseNum++
    return mockDatabase[id].praiseNum
  }
}


// 直接写，就是根路由
// app.use(
//   graphqlHTTP({
//     schema: require('./schema'),
//     rootValue: rootComment
//   })
// );

app.use(
  // 给koa-graphql传一个graphql的协议文件，就会自动帮你生成graphql-api
  mount('/api', graphqlHTTP({
      schema: require('./schema'),
      rootValue: rootComment
  }))
)

app.use(
  mount('/static', static(`${__dirname}/source/static`))
)

app.use(
  mount('/', async (ctx) => {
      ctx.status = 200;

      ctx.body = fs.readFileSync(`${__dirname}/source/index.htm`, 'utf-8')
  })
)

// app.listen(3000);
module.exports = app

