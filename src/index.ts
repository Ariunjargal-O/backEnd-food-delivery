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

app.use("/foods", foodRouter);
app.use("/food-categories", foodCategoryRouter);
app.use("/food-orders", foodOrderRouter);
app.use("/users", userRooter);
// app.use("/food", foodRouterDeleteId);



const connection = async () => {
  await mongoose.connect(
    "mongodb+srv://ariunjargal-o:Ariuka%4098@food-delivery.zobrxc8.mongodb.net/?retryWrites=true&w=majority&appName=Food-delivery"
  );
  console.log("Datebase connected");
};

const MONGODB_URI = process.env.MONGODB_URI;
app.listen(port, async () => {
  await connection();
  return console.log(`Express is listening at http://localhost:${port}`);
});
