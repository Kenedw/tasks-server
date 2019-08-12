// users.ts
import { gql } from 'apollo-server-core';

import '../../types';
import User from '../../db/users';
import Folder from '../../db/folders';
import List from '../../db/lists/index';
import Post from '../../db/posts';

const typeDef = gql`
type User {
  id: String!
  userName: String
  email: String!
  password: String!
  createdAt: String!
  updateAt: String!
  """
  the list of Folders by this user
  """
  folders: [Folder]
},
extend type Query {
  signIn(email:String!,password:String!): User
  users(id: String): [User]
},
extend type Mutation {
  singUp(email: String!, password: String!, userName: String!): User
}
`;

const resolvers = {
  User: {
    folders: (user: UserType): object => new Folder().find({ userId: user.id })
  },
  Query: {
    users: (_: object, { id }: UserType): object => {
      return new User().find({ id });
    },
    signIn: (_: object, { email, password }: UserType): object => {
      return new User().findOne({ email, password });
    }
  },
  Mutation: {
    singUp: (_: object, args: object): object => {
      return new User().create(args)
        .then((newUser: UserType): object => {
          return new Folder().create({ userId: newUser.id, folderName: 'New Folder', folderColor: 'default' });
        })
        .then((newFolder: FolderType): object => {
          return new List().create({ folderId: newFolder.id, listName: 'New List' });
        })
        .then((newList: ListType): object => {
          return new Post().create({ listId: newList.id });
        });
    }
  }
};

export { typeDef as typeDefUsers, resolvers as resolversUsers };
