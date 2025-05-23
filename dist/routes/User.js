"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controller/User");
const userRooter = express_1.default.Router();
userRooter
    .post("/register", User_1.createUser)
    .post("/login", User_1.login);
// .get("/", getAllFoodOrder)
// .get("/:id", getIdFoodOrder)
// .patch("/:id", patchIdFoodOrder);
exports.default = userRooter;
//# sourceMappingURL=User.js.map