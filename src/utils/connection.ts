import mongoose from "mongoose";

export const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Datebase connected");
};
