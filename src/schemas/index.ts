// example data
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server-express';

import { typeDefUsers, resolversUsers } from './users';
import { typeDefPosts, resolversPosts } from './posts';

export const typeDefs = gql`
  # the schema allows the following query:
  type Query {
    posts: [Post]
    user(id: Int!): User
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, typeDefUsers, typeDefPosts],
  resolvers: merge(resolversUsers, resolversPosts)
});
