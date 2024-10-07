// index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const db = require('./db');

(async () => {
  const app = express();

  // Create Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  // Apply middleware
  server.applyMiddleware({ app });

  // Start the express server
  const port = 4000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
})();
