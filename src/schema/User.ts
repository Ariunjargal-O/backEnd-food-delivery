import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    // role:
    // orderedFoods:
  },
  { timestamps: true }
);

export const User = mongoose.model("user", UserSchema);
