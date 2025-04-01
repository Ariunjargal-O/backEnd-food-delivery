import mongoose from "mongoose";
const { Schema } = mongoose;

const FoodCategorySchema = new mongoose.Schema({
    categoryName: String,
 
})


export const FoodCategory = mongoose.model("food-category", FoodCategorySchema);