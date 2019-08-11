import { ApolloServer } from 'apollo-server-express';
import App from './server';
import { schema } from './schemas';

const server = new ApolloServer({ schema, playground: true });
server.applyMiddleware({ app: App, path: '/graphql' });
