import mongoose from "mongoose";
const { Schema } = mongoose;

const FoodSchema = new mongoose.Schema({
    foodName: String,
    price:Number,
    image: String,
    ingredients:String,
   
})


export const Food = mongoose.model("food", FoodSchema);