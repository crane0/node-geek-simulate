var { graphql, buildSchema } = require('graphql');

// buildSchema 是 graphql 的协议
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });

module.exports = function name(query) {
  return graphql(schema, query, root).then((response) => {
    // console.log(response);
    return response
  });
}