import express from "express";
import {
  createFoodOrder,
  getAllFoodOrder,
  getIdFoodOrder,
  patchIdFoodOrder,
} from "../controller/FoodOrder";

const userRooter = express.Router();
userRooter
  .post("/", createFoodOrder)
  .get("/", getAllFoodOrder)
  .get("/", getIdFoodOrder)
  .patch("/", patchIdFoodOrder);

export default userRooter;
