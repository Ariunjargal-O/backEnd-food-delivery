"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const FoodSchema = new mongoose_1.default.Schema({
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: [{ type: String, requied: true }],
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "FoodCategory", // schema-iin model name
        required: true, // zaaval bugluh ystoi gsn ug.
    },
}, {
    timestamps: true, // automataar createdAT, UpdatedAt iig avtomataar grj irne
});
exports.Food = mongoose_1.default.model("food", FoodSchema);
//# sourceMappingURL=Food.js.map