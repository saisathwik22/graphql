import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;

// Why merge type definitions ?

// Modularity: Merging type defs allows you to keep related schema components in seperate files, promoting modularity and organization.

// Easier Collaboration: If multiple devs are working on diff parts of schema, merging seperate type defs can make it easier to collaborate without conflicts.

// Reuse: you can reuse type defs across diff parts of schema, potentially reducing duplication.

// Clear Seperation of Concerns: Each file can focus on a specific domain or type of data, making it easier to understand and maintain.
