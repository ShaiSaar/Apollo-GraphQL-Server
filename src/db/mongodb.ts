import mongoose from 'mongoose';

const connectionUrl = `mongodb://${process.env.IP_ADDRESS}:${process.env.MONGO_PORT}/${process.env.DB}`;

const connectToDB = () => {
    return mongoose.connect(connectionUrl);
}

export {connectToDB}