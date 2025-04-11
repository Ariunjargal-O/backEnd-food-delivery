"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrder = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FoodOrderSchema = new mongoose_1.default.Schema({
    totalprice: { type: Number, required: true },
    user: { type: String, required: true },
    totalPrice: { type: String, required: true },
    status: String
}, {
    timestamps: true,
});
exports.FoodOrder = mongoose_1.default.model("food-order", FoodOrderSchema);
// foodOrderItems:FoodOrderItem[],
// status:FoodOrderStatusEnum
//# sourceMappingURL=FoodOrder.js.map