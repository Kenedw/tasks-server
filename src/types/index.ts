// schemas types
interface UserType{
  id: string;
  userName: string;
  createAt: string;
  updateAt: string;
  email: string;
  password: string;
}
interface PostType{
  id: string;
  folderId: string;
  title: string;
  scope: string;
  createAt: string;
  updateAt: string;
}
interface FolderType{
  id: string;
  userId: string;
  folderName: string;
  folderColor: string;
}
interface ListType{
  id: string;
  folderId: string;
  listName: string;
}
