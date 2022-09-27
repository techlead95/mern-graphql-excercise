"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
        addContact(_parent, args) {
            return prisma_1.default.contact.create({
                data: args,
            });
        },
        updateContact(_parent, args) {
            const { id } = args, rest = __rest(args, ["id"]);
            return prisma_1.default.contact.update({ where: { id: Number(id) }, data: rest });
        },
        deleteContact(_parent, args) {
            return prisma_1.default.contact.delete({ where: { id: Number(args.id) } });
        },
    },
};
