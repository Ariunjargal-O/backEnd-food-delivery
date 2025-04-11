import express from "express";
import dotenv from "dotenv";
import foodRouter from "./routes/Food";
import foodCategoryRouter from "./routes/Foodcategory";
import foodOrderRouter from "./routes/FoodOrder";
import userRooter from "./routes/User";
import { connection } from "./utils/connection";
import cors from "cors";

dotenv.config();

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors())

app.use("/foods", foodRouter);
app.use("/food-categories", foodCategoryRouter);
app.use("/food-orders", foodOrderRouter);
app.use("/users", userRooter);
// app.use("/food", foodRouterDeleteId);

app.get("/", (_req, res) => {
  res.json("Welcome to food delivery Db sdf");
});

app.listen(port, async () => {
  await connection();
  return console.log(`Express is listening at http://localhost:${port}`);
});
