import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    email: { type: String, required: true, unique: true }, // unique ni dahin davtagdahgui bh nuhtsul
    password: { type: String, unique: true },
    phoneNumber: { type: Number },
    address: { type: String },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    // orderedFoods:
  },
  { timestamps: true }
);

export const User = mongoose.model("users", UserSchema);
