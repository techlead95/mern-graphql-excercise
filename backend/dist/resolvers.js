"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
exports.default = {
    Contact: {
        id: (parent) => parent.id,
        firstName: (parent) => parent.firstName,
        lastName: (parent) => parent.lastName,
        phoneNumber: (parent) => parent.phoneNumber,
    },
    Query: {
        contacts() {
            return prisma_1.default.contact.findMany();
        },
    },
    Mutation: {
        addContact(parent, args) {
            return prisma_1.default.contact.create({
                data: args,
            });
        },
        deleteContact(parent, args) {
            return prisma_1.default.contact.delete({ where: { id: Number(args.id) } });
        },
    },
};
