import mongoose from 'mongoose';
import schema from './schema';

class List {
  private ListDB: mongoose.Model<mongoose.Document, {}>;

  private list = schema;

  public constructor () {
    this.config();
    this.middleware();
  }

  private config (): void {
    this.list.set('toObject', { virtuals: true });
  }

  private middleware (): void {
    this.ListDB = mongoose.model('List', schema);
  }

  public async find (args: object): Promise<object> {
    try {
      const response = await this.ListDB.find(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async findOne (args: object): Promise<object> {
    try {
      const response = await this.ListDB.findOne(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async create (args: object): Promise<object> {
    try {
      const response = await this.ListDB.create(args);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }
}

export default List;
