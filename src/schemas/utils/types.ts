// schemas types
interface UserType{
  id: number;
  firstName: string;
  lastName: string;
}
interface PostType{
  id: number;
  userId: number;
  title: string;
  voter: number;
}
