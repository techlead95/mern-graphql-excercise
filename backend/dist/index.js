"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./resolvers"));
const schema_1 = __importDefault(require("./schema"));
const port = 9090;
const server = new apollo_server_1.ApolloServer({
    resolvers: resolvers_1.default,
    typeDefs: schema_1.default,
});
server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
