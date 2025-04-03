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
  .get("/:id", getIdFoodOrder)
  .patch("/:id", patchIdFoodOrder);

export default foodOrderRouter;
