import mongoose from "mongoose";
import { MONGO_URL } from "../constants";

const connectToDatabase = async () => {
    if (!MONGO_URL) {
        console.error('Mongo URL is not provided');
        throw new Error("Mongo URL is not provided");
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.info('Connected to Mongo Database');
    } catch (error) {
        console.error('Error connecting to Mongo Database');
        throw new Error("Error connecting to Mongo Database");
    }
};

export default connectToDatabase;