import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import compresion from 'compression';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();
    this.express.use('*', cors());
    this.express.use(compresion());

    this.middlewares();
    this.database();
    this.listen();
  }

  private middlewares (): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database (): void {
    mongoose.connect('mongodb+srv://root:kronusroot@cluster0-sderl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
  }

  private listen (): void{
    this.express.listen({ port: 3333 }, (): void => {
      console.log('Apollo Server on http://localhost:3333/graphql');
    });
  }
}

export default new App().express;
