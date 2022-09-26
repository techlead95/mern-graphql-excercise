import { Contact } from "@prisma/client";
import prisma from "./prisma";

export default {
  Contact: {
    id: (parent: Contact) => parent.id,
    firstName: (parent: Contact) => parent.firstName,
    lastName: (parent: Contact) => parent.lastName,
    phoneNumber: (parent: Contact) => parent.phoneNumber,
  },
  Query: {
    contacts() {
      return prisma.contact.findMany();
    },
  },
  Mutation: {
    addContact(
      parent: unknown,
      args: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
      }
    ) {
      return prisma.contact.create({
        data: args,
      });
    },
    deleteContact(parent: unknown, args: { id: string }) {
      return prisma.contact.delete({ where: { id: Number(args.id) } });
    },
  },
};
