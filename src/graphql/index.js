const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const {Root} = require('./Types')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = graphql;

const schema = new GraphQLSchema({
  query: Root,
  // mutation,
  // subscription
});

module.exports = graphqlHTTP({
 schema,
 graphiql: true
});