const typeDefs = `#graphql
    type User {
        _id: ID
        name: String,
        workStatus: String,
        createdAt: String,
        img: String,
    }

    input UserInput {
        name: String,
        workStatus: String,
        img: String,
    }

    type Query {
        getUsers: [User]
    }

    type Mutation {
        createUser(userInput: UserInput): User!
        deleteUser(ID: ID!): Boolean
        updateUser(ID: ID!, userInput: UserInput): User!

    }
`;

export default typeDefs;