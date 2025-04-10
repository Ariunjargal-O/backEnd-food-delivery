import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema(
  {
    totalprice: { type: Number, required: true },
    user: { type: String, required: true },
    totalPrice: { type: String, required: true },
    status:String
  },
  {
    timestamps: true,
  }
);

export const FoodOrder = mongoose.model("food-order", FoodOrderSchema);

// foodOrderItems:FoodOrderItem[],
// status:FoodOrderStatusEnum
