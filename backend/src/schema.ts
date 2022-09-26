import { gql } from "apollo-server";

export default gql`
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
