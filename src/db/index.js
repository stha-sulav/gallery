import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("Concted to database.");
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
