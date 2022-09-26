"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
exports["default"] = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Contact {\n    id: ID!\n    firstName: String!\n    lastName: String!\n    phoneNumber: String!\n  }\n\n  type Query {\n    contacts: [Contact!]\n  }\n\n  type Mutation {\n    addContact(\n      firstName: String!\n      lastName: String!\n      phoneNumber: String!\n    ): Contact!\n\n    deleteContact(id: ID!): Contact!\n  }\n"], ["\n  type Contact {\n    id: ID!\n    firstName: String!\n    lastName: String!\n    phoneNumber: String!\n  }\n\n  type Query {\n    contacts: [Contact!]\n  }\n\n  type Mutation {\n    addContact(\n      firstName: String!\n      lastName: String!\n      phoneNumber: String!\n    ): Contact!\n\n    deleteContact(id: ID!): Contact!\n  }\n"])));
var templateObject_1;
