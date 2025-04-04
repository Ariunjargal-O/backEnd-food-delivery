"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Food_1 = require("../controller/Food");
const foodRouter = express_1.default.Router();
foodRouter
    .post("/", Food_1.createFood)
    .get("/", Food_1.getAllFood)
    .get("/:id", Food_1.getIdFood)
    .patch("/:id", Food_1.patchIdFood)
    .delete("/:id", Food_1.deleteIdFood);
exports.default = foodRouter;
//# sourceMappingURL=Food.js.map