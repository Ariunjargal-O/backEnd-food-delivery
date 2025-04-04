"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FoodOrder_1 = require("../controller/FoodOrder");
const userRooter = express_1.default.Router();
userRooter
    .post("/", FoodOrder_1.createFoodOrder)
    .get("/", FoodOrder_1.getAllFoodOrder)
    .get("/:id", FoodOrder_1.getIdFoodOrder)
    .patch("/:id", FoodOrder_1.patchIdFoodOrder);
exports.default = userRooter;
//# sourceMappingURL=User.js.map