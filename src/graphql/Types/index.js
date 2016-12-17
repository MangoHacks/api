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

const StatusType = new GraphQLObjectType({
  name: 'Status',
  description: 'An ableian status metric',
  fields: {
    id: { 
      type: GraphQLID,
      description: 'The status id.'
    },
    title: {
      type: GraphQLString,
      description: 'The status title.'
    },
    description: {
      type: GraphQLString,
      description: 'The status description.'
    },
    viewed: {
      type:GraphQLBoolean,
      description: 'Whether or not the user has viewed the status.'
    }
  }
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  description: 'A chat bot message',
  fields: {
    id: { 
      type: GraphQLID,
      description: 'The status id.'
    },
    title: {
      type: GraphQLString,
      description: 'The status title.'
    },
    description: {
      type: GraphQLString,
      description: 'The status description.'
    },
    viewed: {
      type:GraphQLBoolean,
      description: 'Whether or not the user has viewed the status.'
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
    },
    status: {
      type: StatusType,
      resolve: () => new Promise((resolve) => {
        resolve({
          id: 1,
          title: 'hello world',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt provident voluptatum beatae cumque natus consequuntur cupiditate facilis ratione, dolorem magni voluptate, vero molestias omnis quisquam aut, quae odio. Hic, accusantium.',
          viewed: false
        });
      })
    },
    // messages: {
    //   type: GraphQLString,
    //   resolve: () => 'world'
    // }
  }
});

module.exports = {
  Root
};