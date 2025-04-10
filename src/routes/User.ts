import express from "express";

import { createUser, login } from "../controller/User";

const userRooter = express.Router();
userRooter
  .post("/register", createUser)
  .post("/login", login)
  
  // .get("/", getAllFoodOrder)
  // .get("/:id", getIdFoodOrder)
  // .patch("/:id", patchIdFoodOrder);

export default userRooter;
