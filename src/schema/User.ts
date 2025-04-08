import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {type:String, required:true},
    lastName:  {type:String, required:true},
    userName: {type:String, required:true},
    email: {type: String, required:true, unique:true}, // unique ni dahin davtagdahgui bh nuhtsul
    password: {type: String, required:true},
    phoneNumber: {type:Number, required:true},
    address: {type: String, required:true},
    role: {type: String, enum: ["ADMIN", "USER"]},
    // orderedFoods:
  },
  { timestamps: true }
);

export const User = mongoose.model("users", UserSchema);
