import mongoose from 'mongoose';
import schema from './schema';

class Folder {
  private FolderDB: mongoose.Model<mongoose.Document, {}>;

  private folder = schema;

  public constructor () {
    this.config();
    this.middleware();
  }

  private config (): void {
    this.folder.set('toObject', { virtuals: true });
  }

  private middleware (): void {
    this.FolderDB = mongoose.model('Folder', schema);
  }

  public async findOne (args: object): Promise<object> {
    try {
      const response = await this.FolderDB.findOne(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async find (args: object): Promise<object> {
    try {
      const response = await this.FolderDB.find(args).exec();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }

  public async create (args: object): Promise<object> {
    try {
      const response = await this.FolderDB.create(args);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e.mensseger);
      throw e;
    }
  }
}

export default Folder;
