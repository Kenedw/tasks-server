import { ApolloServer } from 'apollo-server-express';
import App from './server';
import { schema } from './graphql';
import depthLimit from 'graphql-depth-limit';

const server = new ApolloServer({ schema, playground: true, validationRules: [depthLimit(6)] });
server.applyMiddleware({ app: App, path: '/graphql' });
