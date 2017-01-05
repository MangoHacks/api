const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = require('graphql');

const {getUsers, getUserById} = require('../../api/data/users');


const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: { 
      type: GraphQLID,
      description: 'The user id.'
    },
    name: {
      type: GraphQLString,
      description: `The user's full name`
    }
  }
});
const Root = new GraphQLObjectType({
  name: 'Root',
  description: 'The root query type',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: getUsers
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
          description: 'The id of the user.'
        }
      },
      resolve: (_, args) => getUserById(args.id)
    }
  }
});

module.exports = {
  Root
};