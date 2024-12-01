import mongoose from "mongoose";

import { MONGODB_URL } from "../configs/database.js";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
