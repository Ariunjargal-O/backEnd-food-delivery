import mongoose from "mongoose";
const { Schema } = mongoose;

const FoodSchema = new mongoose.Schema(
  {
    foodName: {type: String,required: true },
    price: {type: Number, required: true},
    image: {type: String, required:true},
    ingredients: {type: String, requied:true},
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory", // href-iig bichih endpoint ni
      required: true, // zaaval bugluh ystoi gsn ug.
    },
  },
  {
    timestamps: true, // automataar createdAT, UpdatedAt iig avtomataar grj irne
  }
);

export const Food = mongoose.model("food", FoodSchema);
