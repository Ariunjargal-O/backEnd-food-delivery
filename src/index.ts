import express, { Request, Response } from "express";
import { Food } from "./schema/Food";
import mongoose from "mongoose";
import { FoodCategory } from "./schema/FoodCategory";
import { User } from "./schema/User";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json("Hello World!");
});

app.post("/food", async (req, res) => {
  //   console.log(req.body);
  const created = await Food.create(req.body);
  res.json({ success: true, food: created });
});

app.get("/food", async (req, res) => {
  const allFood = await Food.find();
  res.json(allFood);
});

app.get("/food/:id", async (req: Request, res: Response) => {
    const {id} = req.params
  const oneFood = await Food.findById(id)
try{res.json(oneFood);}
catch(error){
    res.status(200).json({msj:"nouuu"})
}
});

app.delete("/food")





app.post("/food-category", async (req, res) => {
  const createdFCategory = await FoodCategory.create(req.body);
  res.json({ success: true, foodcategory: createdFCategory });
});

app.post("/user", async (req, res) => {
  const createdUser = await User.create(req.body);
  res.json({ success: true, createdUser: createdUser });
});

const connection = async () => {
  await mongoose.connect(
    ""
  );
  console.log("Datebase connected");
};

app.listen(port, async () => {
  await connection();
  return console.log(`Express is listening at http://localhost:${port}`);
});
