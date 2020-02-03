/* 
  apollo-server-koa 官网给的例子，
  在打开的页面（模拟发送 post）中，输入 query{hello} 运行即可。
  
  因为使用的是 post 请求，所以也可以借助插件发送。
  url: http://localhost:4000/graphql
  body: {"query":"query{hello}"}
*/
const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new Koa();
server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());


app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
