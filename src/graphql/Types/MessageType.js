const graphql = require('graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} = graphql;

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    latitude: {type: GraphQLFloat},
    longitude: {type: GraphQLFloat}
  }
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: {
    id: {type: GraphQLString},
    text: {type: GraphQLString},
    created: {type: GraphQLString},
    gps: {type: GraphQLBoolean},
    location: {type: LocationType}
  }
});

