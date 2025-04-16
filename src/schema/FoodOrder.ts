import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema(
  {
    totalprice: { type: Number, required: true },
    users: { type: String, required: true },
    foodOrderItems: {type:String},
    foodOrderStatus: { type: String, enum: [ "Pending","Delivered", "Cancelled"], default:"Pending" },
    deliveryAddress:{ type: String},
  },
  {
    timestamps: true,
  }
);

export const FoodOrder = mongoose.model("food-order", FoodOrderSchema);

// foodOrderItems:FoodOrderItem[],
// status:FoodOrderStatusEnum
