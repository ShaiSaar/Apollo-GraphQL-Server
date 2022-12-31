"use strict";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as dotenv from 'dotenv';
dotenv.config();

import { connectToDB } from './db/mongodb';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

connectToDB()
.then(() => {
    console.log('MongoDB connection successfily');
    return startStandaloneServer(server, {
        listen: { port: 4000 },
      });
})
.then((res) => {
    console.log(`server running at ${res.url}`);
}).catch(err => {
    console.error('Failure accour :', err);
})