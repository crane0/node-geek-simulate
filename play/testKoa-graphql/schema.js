/* 
  使用 graphql API的协议，写的评论数据的结构,
  type Query 就是请求包，也就是说，请求 comment，就能拿到一个数组结构的评论。
*/

const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Comment {
    id: Int,
    avatar: String,
    name: String,
    content: String,
    publishDate: String,
    commentNum: Int,
    praiseNum: Int,
    isTop: Boolean,
  },
  type Query {
    comment: [Comment]
  }
`)


// 取数据逻辑
// schema.getQueryType().getFields().comment.resolve = () => {
//   return [{
//     id: 1,
//     avatar: 'https://static001.geekbang.org/account/avatar/00/0f/db/ba/304a9a4a.jpg',
//     name: 'crane',
//     content: '这是评论',
//     publishDate: '今天',
//     commentNum: 10,
//     praiseNum: 5,
//     isTop: true,
//   }]
// }


module.exports = schema