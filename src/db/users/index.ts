import mongoose from 'mongoose';
import schema from './schema';
import uniqueValidator from 'mongoose-unique-validator';

class User {
  private UserDB: mongoose.Model<mongoose.Document, {}>;

  private user = schema;

  public constructor () {
    this.config();
    this.middleware();
  }

  private config (): void {
    this.user.set('toObject', { virtuals: true });
    this.user.plugin(uniqueValidator, { message: 'is already taken.' });
  }

  private middleware (): void {
    this.UserDB = mongoose.model('User', schema);
  }

  public async findOne (args: object): Promise<object> {
    try {
      const response = await this.UserDB.findOne(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async find (args: object): Promise<object> {
    try {
      const response = await this.UserDB.find(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async create (args: object): Promise<object> {
    try {
      const response = await this.UserDB.create(args);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }
}

export default User;
