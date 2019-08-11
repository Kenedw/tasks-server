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
  { id: 1, firstName: 'Tom', lastName: 'Coleman', email: 'Tom@email.com', password: '123456' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo', email: 'Sashko@email.com', password: '123456' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov', email: 'Mikhail@email.com', password: '123456' }
];
// posts.ts
const typeDef = gql`
  type Post {
    id: Int!
    title: String
    user: User
    votes: Int
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
