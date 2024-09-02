import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log("Error in connecting to Mongodb", error.message);
    }
}

export default connectToMongodb;