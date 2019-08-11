// example data
import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import { gql } from 'apollo-server-express';

import { typeDefUsers, resolversUsers } from './usersSchema';
import { typeDefPosts, resolversPosts } from './postsSchema';

export const typeDefs = gql`
  # the schema allows the following query:
  type Query {
    _empty : String
  }

  # this schema allows the following mutation:
  type Mutation {
    _empty : String
  }

  # this schema allows the following subscription:
  type Subscription {
    _empty : String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, typeDefUsers, typeDefPosts],
  resolvers: merge(resolversUsers, resolversPosts)
});
