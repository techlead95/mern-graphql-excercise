import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import { BASE_URL } from "../cosntants";
import { Contact } from "../types";

export const CONTACTS_QUERY_KEY = ["contacts"];

export default function useContacts() {
  return useQuery<Contact[]>(CONTACTS_QUERY_KEY, () =>
    request(
      BASE_URL,
      gql`
        query {
          contacts {
            id
            firstName
            lastName
            phoneNumber
          }
        }
      `
    ).then((data) => data.contacts)
  );
}
