// users.ts
import { gql } from 'apollo-server-core';

import '../../types';
import Folder from '../../db/folders';
import List from '../../db/lists';

const typeDef = gql`
type Folder {
  id: String!
  folderName: String!
  folderColor: String!
  """
  the list of Lists by this Folder
  """
  lists: [List]
},
extend type Query {
  folders(id: String): Folder
},
extend type Mutation {
  newFolder(userId: String! ,folderName: String = "folder", folderColor: String = "default"): Folder
}
`;

const resolvers = {
  Folder: {
    lists: (folder: FolderType): object => new List().find({ folderId: folder.id })
  },
  Query: {
    folders: (_: object, { id }: UserType): object => {
      return new Folder().find({ id });
    }
  },
  Mutation: {
    newFolder: (_: object, args: object): object => {
      return new Folder().create(args);
    }
  }
};

export { typeDef as typeDefFolders, resolvers as resolversFolders };
