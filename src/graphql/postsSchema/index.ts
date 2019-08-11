import { gql } from 'apollo-server-express';
import { find } from 'lodash';
import '../utils/types';

const posts = [
  { id: 1, userId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, userId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, userId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, userId: 3, title: 'Launchpad is Cool', votes: 7 }
];
const users = [
  { id: 1, userName: 'Tom', lastName: 'Coleman', createdAt: '10/08/19', email: 'Tom@email.com', password: '123456' },
  { id: 2, userName: 'Sashko', lastName: 'Stubailo', createdAt: '10/08/19', email: 'Sashko@email.com', password: '123456' },
  { id: 3, userName: 'Mikhail', lastName: 'Novikov', createdAt: '10/08/19', email: 'Mikhail@email.com', password: '123456' }
];
// posts.ts
const typeDef = gql`
  type Post {
    id: String!
    title: String
    user: User
    votes: Int
  },
  extend type Query {
    posts: [Post]
  },
  extend type Mutation {
    upvotePost (postId: String!): Post
  }
  
`;

const resolvers = {
  Query: {
    posts: (): object[] => {
      return posts;
    }
  },
  Post: {
    user: (post:PostType):object[] => find(users, { id: post.userId })
  },
  Mutation: {
    upvotePost: (_, { postId }): object => {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    }
  }
};

export { typeDef as typeDefPosts, resolvers as resolversPosts };
