import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        const connectionIns = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database is connected successfully`);
        console.log(`Host: ${connectionIns.connection.host}`);
    } catch (error) {
        console.log("Failed to connect with database", error);
        process.exit(1)
    }
}