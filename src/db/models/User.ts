import {model, Schema} from 'mongoose';

const userSchema = new Schema({
    name: String,
    workStatus: String,
    createdAt: String,
    img: String,
})

const userModel = model('User', userSchema);
export default userModel;