// users.ts
import { gql } from 'apollo-server-core';
import { filter } from 'lodash';

import '../utils/types';
import User from '../../db/users/index';

// example data
const posts = [
  { id: 1, userId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, userId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, userId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, userId: 3, title: 'Launchpad is Cool', votes: 7 }
];

const typeDef = gql`
type User {
  id: String!
  userName: String!
  email: String!
  password: String!
  createdAt: String!
  """
  the list of Posts by this user
  """
  posts: [Post]
},
extend type Query {
  signIn(email:String!,password:String!): User
  users(id: String): User
},
extend type Mutation {
  singUp(email: String!, password: String!, userName: String!): User
}
`;

const resolvers = {
  User: {
    posts: (user: UserType): object => filter(posts, { userId: user.id })
  },
  Query: {
    users: (_: object, { id }: UserType): object => {
      return new User().find({ id });
    },
    signIn: (_: object, { email, password }: UserType): object => {
      return new User().find({ email, password });
    }
  },
  Mutation: {
    singUp: (_: object, args: object): object => {
      return new User().create(args);
    }
  }
};

export { typeDef as typeDefUsers, resolvers as resolversUsers };
