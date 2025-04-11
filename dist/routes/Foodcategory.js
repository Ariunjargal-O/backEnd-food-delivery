"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Foodcategory_1 = require("../controller/Foodcategory");
const _check_token_1 = require("../middleware/_check-token");
const foodCategoryRouter = express_1.default.Router();
foodCategoryRouter
    .get("/with-foods", Foodcategory_1.getCategoryWithFoods) // :id-iin ard bh ysgui.
    .post("/", _check_token_1.checkToken, Foodcategory_1.createFoodcategory)
    .get("/", Foodcategory_1.getAllFoodcategory)
    .get("/:id", Foodcategory_1.getIdFoodcategory)
    .patch("/:id", Foodcategory_1.patchIdFoodcategory)
    .delete("/:id", Foodcategory_1.deleteIdFoodcategory);
exports.default = foodCategoryRouter;
//# sourceMappingURL=Foodcategory.js.map