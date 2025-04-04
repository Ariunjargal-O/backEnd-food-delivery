"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const FoodCategorySchema = new mongoose_1.default.Schema({
    categoryName: { type: String, required: true },
}, {
    timestamps: true,
});
exports.FoodCategory = mongoose_1.default.model("food-categories", FoodCategorySchema);
//# sourceMappingURL=FoodCategory.js.map