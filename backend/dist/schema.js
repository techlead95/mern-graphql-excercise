"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  type Contact {
    id: ID!
    firstName: String!
    lastName: String!
    phoneNumber: String!
  }

  type Query {
    contacts: [Contact!]
  }

  type Mutation {
    addContact(
      firstName: String!
      lastName: String!
      phoneNumber: String!
    ): Contact!

    deleteContact(id: ID!): Contact!
  }
`;
