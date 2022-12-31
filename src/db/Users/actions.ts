import UserModel from '../models/User';
const gen = require("images-generator");

export async function getAllUsers() {
  try {
    const result = await UserModel.find();
    console.log(`Users were fetched`);
    return result;
  }
  finally {
  }
}

export async function addUser(user: any) {
    try {
      const img = await gen.animal.bunny();
      const result = await UserModel.create({
        name: user.name,
        workStatus: user.workStatus,
        createdAt: new Date().toISOString(),
        img: img
      });
      console.log(`An employee was inserted with details: `, result);
      return result;
    }
    finally {
    }
}

export async function deleteUser(ID: string) {
  try {
    const result = (await UserModel.deleteOne({_id: ID})).deletedCount;
    console.log(`A user with id ${ID} was deleted`)
    return !!result;
  }
  finally {

  }
}

export async function updateUser(ID: string, name: string, workStatus: string) {
  try {
    await UserModel.findByIdAndUpdate(ID, {name, workStatus });
    const user = await UserModel.findById(ID);
    console.log(`A user with id ${ID} was updated to: `, user)
    return user;
  }
  finally {

  }
}