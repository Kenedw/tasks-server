// users.ts
import { gql } from 'apollo-server-core';

import '../../types';
import Post from '../../db/posts';

const typeDef = gql`
type Post {
  id: String!
  scope: String
  title: String
},
extend type Query {
  posts(id: String): Post
},
extend type Mutation {
  newPost(postName: String = "task"): Post
}
`;

const resolvers = {
  Query: {
    posts: (_: object, { id }: UserType): object => {
      return new Post().find({ id });
    }
  },
  Mutation: {
    newPost: (_: object, args: object): object => {
      return new Post().create(args);
    }
  }
};

export { typeDef as typeDefPosts, resolvers as resolversPosts };
