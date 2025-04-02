import { Request, Response } from "express";
import { FoodOrder } from "../schema/FoodOrder";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const createdFCategory = await FoodOrder.create(req.body);
    res.json({ success: true, foodcategory: createdFCategory });
  } catch (error) {
    res.status(200).json("Haven't food order");
  }
};

export const getAllFoodOrder = async (_req: Request, res: Response) => {
  try {
    const allFood = await FoodOrder.find();
    res.json(allFood);
  } catch (error) {
    res.status(200).json("Haven't food order");
  }
};

export const getIdFoodOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await FoodOrder.findById(id);

    res.json(oneFood);
  } catch (error) {
    res.status(200).json("Haven't food order");
  }
};

export const patchIdFoodOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await FoodOrder.findByIdAndUpdate(id);
    res.json(oneFood);
  } catch (error) {
    res.status(200).json("Haven't food order");
  }
};

// app.post("/food-order", async (req: Request, res: Response) => {
//     const createdFOrder = await FoodOrder.create(req.body);
//     res.json({ success: true, foodorder: createdFOrder });
//   });

//   app.get("/food-order",async (req, res) => {
//     const allFood = await FoodOrder.find();
//     res.json(allFood);
//   });

//   app.get("/food-order:id", async (req: Request, res: Response) => {
//       const {id} = req.params
//     const oneFood = await FoodOrder.findById(id)
//   try{res.json(oneFood);}
//   catch(error){
//       res.status(200).json({msj:"nouuu"})
//   }
//   });

//   app.patch("/food-order:id", async (req: Request, res: Response) => {
//       const {id} = req.params
//     const oneFood = await FoodOrder.findById(id)
//   try{res.json(oneFood);}
//   catch(error){
//       res.status(200).json("Haven't food-order")
//   }
//   });
