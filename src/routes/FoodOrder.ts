import express from "express";
import {
  createFoodOrder,
  getAllFoodOrder,
  getIdFoodOrder,
  getOrderWithUser,
  patchIdFoodOrder,
} from "../controller/FoodOrder";

const foodOrderRouter = express.Router();
foodOrderRouter
  .get("/with-users", getOrderWithUser) 
  .post("/", createFoodOrder)
  .get("/", getAllFoodOrder)
  .get("/:id", getIdFoodOrder)
  .patch("/:id", patchIdFoodOrder);

export default foodOrderRouter;
