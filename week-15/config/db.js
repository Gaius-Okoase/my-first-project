import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Server connected to database successfully');
    } catch (error) {
        console.error('Failed to connetct to database', error);
        process.exit(1);
    }
}

export default connectDb;