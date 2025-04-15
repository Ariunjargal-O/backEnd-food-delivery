import { Request, Response } from "express";
import { FoodOrder } from "../schema/FoodOrder";

export const createFoodOrder = async (req: Request, res: Response) => {
  try {
    const createdFCategory = await FoodOrder.create(req.body);
    res.json({ success: true, foodcategory: createdFCategory });
  } catch (error) {
    res.status(404).json("Haven't food order");
  }
};

export const getAllFoodOrder = async (_req: Request, res: Response) => {
  try {
    const allFood = await FoodOrder.find();
    res.json(allFood);
  } catch (error) {
    res.status(404).json("Haven't food order");
  }
};

export const getIdFoodOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await FoodOrder.findById(id);

    res.json(oneFood);
  } catch (error) {
    res.status(404).json("Haven't food order");
  }
};

export const patchIdFoodOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await FoodOrder.findByIdAndUpdate(id);
    res.json(oneFood);
  } catch (error) {
    res.status(404).json("Haven't food order");
  }
};

export const getOrderWithUser = async (req: Request, res: Response) => {
  try {
    const categories = await FoodOrder.aggregate([
      {
        $lookup: {
          from: "users",  
          localField: "_id",
          foreignField: "userID",
          as: "users",
        },
      },
    ]);

    // * from: The target collection.
    // * localField: The local join field.
    // * foreignField: The target join field.
    // * as: The name for the results.
    // * pipeline: Optional pipeline to run on the foreign collection.
    // * let: Optional variables to use in the pipeline field stages.
    res.json({ success: true, categories });
  } catch (error) {
    res.status(404).json({ success: true, error: error.message });
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
