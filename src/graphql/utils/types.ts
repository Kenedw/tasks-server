// schemas types
interface UserType{
  id: string;
  userName: string;
  createAt: string;
  email: string;
  password: string;
}
interface PostType{
  id: string;
  userId: number;
  title: string;
  voter: number;
}
