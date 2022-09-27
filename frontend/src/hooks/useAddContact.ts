import { useMutation, useQueryClient } from "react-query";
import { request, gql } from "graphql-request";
import { BASE_URL } from "../cosntants";
import { Contact, OmitId } from "../types";
import { CONTACTS_QUERY_KEY } from "./useContacts";

export default function useAddContact() {
  const queryClient = useQueryClient();

  return useMutation(
    (variables: OmitId<Contact>) =>
      request(
        BASE_URL,
        gql`
          mutation (
            $firstName: String!
            $lastName: String!
            $phoneNumber: String!
          ) {
            addContact(
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
