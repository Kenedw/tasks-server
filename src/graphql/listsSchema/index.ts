// users.ts
import { gql } from 'apollo-server-core';

import '../../types';
import List from '../../db/lists';
import Post from '../../db/posts';

const typeDef = gql`
type List {
  id: String!
  listName: String!
  """
  the list of Posts by this List
  """
  posts: [Post]
},
extend type Query {
  lists(id: String): List
},
extend type Mutation {
  newList(folderId: String!,listName: String = "list"): List
}
`;

const resolvers = {
  List: {
    posts: (list: ListType): object => new Post().find({ listId: list.id })
  },
  Query: {
    lists: (_: object, { id }: UserType): object => {
      return new List().find({ id });
    }
  },
  Mutation: {
    newList: (_: object, args: object): object => {
      return new List().create(args);
    }
  }
};

export { typeDef as typeDefLists, resolvers as resolversLists };
