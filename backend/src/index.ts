import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import schema from "./schema";

const port = process.env.PORT || 9090;

const server = new ApolloServer({
  resolvers,
  typeDefs: schema,
});

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
