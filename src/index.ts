import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import foodRouter from "./routes/Food";
import foodCategoryRouter from "./routes/Foodcategory";
import foodOrderRouter from "./routes/FoodOrder";
import userRooter from "./routes/User";

dotenv.config();

const app = express();
const port = 8000;
app.use(express.json());

app.use("/food", foodRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);
app.use("/user", userRooter);
// app.use("/food", foodRouterDeleteId);



const connection = async () => {
  await mongoose.connect(
    ""
  );
  console.log("Datebase connected");
};

const MONGODB_URI = process.env.MONGODB_URI;
app.listen(port, async () => {
  await connection();
  return console.log(`Express is listening at http://localhost:${port}`);
});
