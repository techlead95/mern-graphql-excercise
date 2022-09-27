import { useMutation, useQueryClient } from "react-query";
import { request, gql } from "graphql-request";
import { BASE_URL } from "../cosntants";
import { Contact } from "../types";
import { CONTACTS_QUERY_KEY } from "./useContacts";

export default function useUpdateContact() {
  const queryClient = useQueryClient();

  return useMutation(
    (variables: Contact) =>
      request(
        BASE_URL,
        gql`
          mutation (
            $id: ID!
            $firstName: String!
            $lastName: String!
            $phoneNumber: String!
          ) {
            updateContact(
              id: $id
              firstName: $firstName
              lastName: $lastName
              phoneNumber: $phoneNumber
            ) {
              id
            }
          }
        `,
        variables
      ),
    {
      onSuccess() {
        queryClient.invalidateQueries(CONTACTS_QUERY_KEY);
      },
    }
  );
}
