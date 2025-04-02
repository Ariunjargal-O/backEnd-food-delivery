import express from "express";
import { createFood, deleteIdFood, getAllFood, getIdFood, patchIdFood } from "../controller/Food";


const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getAllFood)
  .get("/", getIdFood)
  .patch("/", patchIdFood)
  .delete("/", deleteIdFood);

export default foodRouter;
