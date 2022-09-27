import { useMutation, useQueryClient } from "react-query";
import { request, gql } from "graphql-request";
import { BASE_URL } from "../cosntants";
import { CONTACTS_QUERY_KEY } from "./useContacts";

export default function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation(
    (variables: { id: string }) =>
      request(
        BASE_URL,
        gql`
          mutation ($id: ID!) {
            deleteContact(id: $id) {
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
