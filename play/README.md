# 1，test 测试文件夹

## 1.1，testGraphql 文件夹，用于测试 koa 和 graphql 配合搭建的服务器。

社区已经有对应的实现，就是 [koa-graphql](https://github.com/chentsulin/koa-graphql)

## 1.2，testApolloServer.js

用于测试 [apollo-server-koa](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-koa) 的使用。

# 2，[koa-graphql](https://github.com/chentsulin/koa-graphql)

操作数据，可以通过 `schema.js` 中的逻辑，也可以通过 `index.js` 中的 `rootComment`。

1. 请求评论数据 get

http://localhost:3000/api?query={comment{name, content, pariseNum}}

2. 点赞操作 post

因为不能直接发送，所以通过这个插件 [Talend API Tester](https://chrome.google.com/webstore/search/Talend%20API%20Tester?hl=zh-CN)

http://localhost:3000/api

body数据：
```
{"query":"mutation{praise(id:2)}"}
```

