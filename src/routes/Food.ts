import express from "express";
import { createFood, deleteIdFood, getAllFood, getIdFood, patchIdFood } from "../controller/Food";
import { checkToken } from "../middleware/_check-token";


const foodRouter = express.Router();
foodRouter
  .post("/",checkToken, createFood)
  .get("/", getAllFood)
  .get("/:id", getIdFood)
  .patch("/:id", patchIdFood)
  .delete("/:id", deleteIdFood);

export default foodRouter;
