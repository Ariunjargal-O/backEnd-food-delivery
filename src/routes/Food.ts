import express from "express";
import { createFood, deleteIdFood, getAllFood, getIdFood, patchIdFood } from "../controller/Food";


const foodRouter = express.Router();
foodRouter
  .post("/", createFood)
  .get("/", getAllFood)
  .get("/:id", getIdFood)
  .patch("/:id", patchIdFood)
  .delete("/:id", deleteIdFood);

export default foodRouter;
