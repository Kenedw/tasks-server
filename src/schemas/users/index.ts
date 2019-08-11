// users.ts
import { gql } from 'apollo-server-core';
import { find, filter } from 'lodash';

import '../utils/types';

// example data
const users = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman', email: 'Tom@email.com', password: '123456' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo', email: 'Sashko@email.com', password: '123456' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov', email: 'Mikhail@email.com', password: '123456' }
];
const posts = [
  { id: 1, userId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, userId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, userId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, userId: 3, title: 'Launchpad is Cool', votes: 7 }
];

const typeDef = gql`
type User {
  id: Int!
  firstName: String!
  lastName: String
  email: String!
  password: String!
  """
  the list of Posts by this user
  """
  posts: [Post]
}
`;

const resolvers = {
  Query: {
    user: (_: object, { id }: UserType): object => {
      return find(users, { id });
    }
  },
  User: {
    posts: (user: UserType): object => filter(posts, { userId: user.id })
  }
};

export { typeDef as typeDefUsers, resolvers as resolversUsers };
