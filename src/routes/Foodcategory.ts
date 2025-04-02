import express from "express";
import {
  createFoodcategory,
  deleteIdFoodcategory,
  getAllFoodcategory,
  getIdFoodcategory,
  patchIdFoodcategory,
} from "../controller/Foodcategory";

const foodCategoryRouter = express.Router();
foodCategoryRouter
  .post("/", createFoodcategory)
  .get("/", getAllFoodcategory)
  .get("/", getIdFoodcategory)
  .patch("/", patchIdFoodcategory)
  .delete("/", deleteIdFoodcategory);

export default foodCategoryRouter;
