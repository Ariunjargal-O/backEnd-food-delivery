import express from "express";
import {
  createFoodcategory,
  deleteIdFoodcategory,
  getAllFoodcategory,
  getCategoryWithFoods,
  getIdFoodcategory,
  patchIdFoodcategory,
} from "../controller/Foodcategory";
import { checkToken } from "../middleware/_check-token";

const foodCategoryRouter = express.Router();
foodCategoryRouter
  .get("/with-foods",checkToken, getCategoryWithFoods) // :id-iin ard bh ysgui.
  .post("/",checkToken, createFoodcategory)
  .get("/", getAllFoodcategory)
  .get("/:id", getIdFoodcategory)
  .patch("/:id", patchIdFoodcategory)
  .delete("/:id", deleteIdFoodcategory);

export default foodCategoryRouter;
