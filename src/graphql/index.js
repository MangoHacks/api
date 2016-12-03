const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = graphql;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      messages: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

module.exports = graphqlHTTP({
 schema,
 graphiql: true
});