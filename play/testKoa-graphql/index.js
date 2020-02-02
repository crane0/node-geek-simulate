const Koa = require('koa');
const graphqlHTTP = require('koa-graphql');

const app = new Koa();

// 取数据
const rootComment = {
  comment: () => {
    return [
      {
        id: 1,
        avatar: 'https://static001.geekbang.org/account/avatar/00/19/19/a0/84f95280.jpg',
        name: 'Junting',
        isTop: true,
        content: '你最帅了～',
        publishDate: '今天',
        commentNum: 10,
        praiseNum: 5
      }
    ]
  }
}


// 直接写，就是根路由
// 如果在 require('./schema') 中写了取数据的逻辑，就不用写 rootValue 了
app.use(
  graphqlHTTP({
    schema: require('./schema'),
    rootValue: rootComment
  })
);


app.listen(3000);
