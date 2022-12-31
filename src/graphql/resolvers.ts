import * as db from '../db';

const resolvers = {
    Query: {
       async getUsers () {
        return await db.getAllUsers();
       }
    },
    Mutation: {
       async createUser(_: any, {userInput}: any) {
        return await db.addUser(userInput);
       },
       async deleteUser(_: any, {ID}: any) {
        return await db.deleteUser(ID);
       },
       async updateUser(_: any, {ID, userInput}: any) {
        return await db.updateUser(ID, userInput.name, userInput.workStatus);
       },
    }
}

export default resolvers;