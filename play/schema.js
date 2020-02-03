/* 
  使用 graphql API的协议，写的评论数据的结构,
  type Query 就是请求包，也就是说，请求 comment，就能拿到一个数组结构的评论。
*/

const { buildSchema } = require('graphql')

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
  },
  type Mutation {
    praise(id: Int): Int
  }
`)


// 取数据逻辑
// schema.getQueryType().getFields().comment.resolve = () => {
//   return Object.keys(mockDatabase).map(key => mockDatabase[key])
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

// 更改数据逻辑
// schema.getMutationType().getFields().comment.resolve = (arg0, {id}) => {
//   mockDatabase[id].praiseNum++
//   return mockDatabase[id].praiseNum
// }


module.exports = schema