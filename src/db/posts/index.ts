import mongoose from 'mongoose';
import schema from './schema';

class Post {
  private PostDB: mongoose.Model<mongoose.Document, {}>;

  private post = schema;

  public constructor () {
    this.config();
    this.middleware();
  }

  private config (): void {
    this.post.set('toObject', { virtuals: true });
  }

  private middleware (): void {
    this.PostDB = mongoose.model('Post', schema);
  }

  public async find (args: object): Promise<object> {
    try {
      const response = await this.PostDB.find(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async findOne (args: object): Promise<object> {
    try {
      const response = await this.PostDB.findOne(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async create (args: object): Promise<object> {
    try {
      const response = await this.PostDB.create(args);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }
}

export default Post;
