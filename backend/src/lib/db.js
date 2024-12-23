import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to mongodb ${conn.connection.host}`);
  } catch (err) {
    console.log("failed to connect to mongodb ", err);
    process.exit(1);
  }
};
