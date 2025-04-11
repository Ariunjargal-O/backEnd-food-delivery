"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },
    email: { type: String, required: true, unique: true }, // unique ni dahin davtagdahgui bh nuhtsul
    password: { type: String, unique: true },
    phoneNumber: { type: Number },
    address: { type: String },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    // orderedFoods:
}, { timestamps: true });
exports.User = mongoose_1.default.model("users", UserSchema);
//# sourceMappingURL=User.js.map