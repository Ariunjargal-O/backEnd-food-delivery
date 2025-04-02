import express from "express";
import {
  createFoodOrder,
  getAllFoodOrder,
  getIdFoodOrder,
  patchIdFoodOrder,
} from "../controller/FoodOrder";

const foodOrderRouter = express.Router();
foodOrderRouter
  .post("/", createFoodOrder)
  .get("/", getAllFoodOrder)
  .get("/", getIdFoodOrder)
  .patch("/", patchIdFoodOrder);

export default foodOrderRouter;
