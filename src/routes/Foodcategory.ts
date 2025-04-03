import express from "express";
import {
  createFoodcategory,
  deleteIdFoodcategory,
  getAllFoodcategory,
  getCategoryWithFoods,
  getIdFoodcategory,
  patchIdFoodcategory,
} from "../controller/Foodcategory";

const foodCategoryRouter = express.Router();
foodCategoryRouter
  .get("/with-foods", getCategoryWithFoods) // :id-iin ard bh ysgui.
  .post("/", createFoodcategory)
  .get("/", getAllFoodcategory)
  .get("/:id", getIdFoodcategory)
  .patch("/:id", patchIdFoodcategory)
  .delete("/:id", deleteIdFoodcategory);

export default foodCategoryRouter;
