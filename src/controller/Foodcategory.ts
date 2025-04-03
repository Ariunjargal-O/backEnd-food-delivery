import { Request, Response } from "express";
import { FoodCategory } from "../schema/FoodCategory";

export const createFoodcategory = async (req: Request, res: Response) => {
  try {
    const createdFCategory = await FoodCategory.create(req.body);
    res.json({ success: true, foodcategory: createdFCategory });
  } catch (error) {
    res.status(404).json("Haven't food category");
  }
};

export const getAllFoodcategory = async (_req: Request, res: Response) => {
  try {
    const allFood = await FoodCategory.find();
    res.json(allFood);
  } catch (error) {
    res.status(404).json("Haven't food category");
  }
};

export const getIdFoodcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await FoodCategory.findById(id);
    res.json(oneFood);
  } catch (error) {
    res.status(404).json("Haven't food category");
  }
};

export const patchIdFoodcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const upfood = await FoodCategory.findById(id);
    res.json({ success: true, update: upfood });
  } catch (error) {
    res.status(404).json("Haven't food category");
  }
};

export const deleteIdFoodcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const delfood = await FoodCategory.findById(id);
    res.json({ success: true, update: delfood });
  } catch (error) {
    res.status(404).json("Haven't food category");
  }
};

export const getCategoryWithFoods = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "categoryId",
          as: "foods",
        },
      },
    ]);
    res.json({ success: true, categories });
  } catch (error) {
    res.status(404).json({ success: true, error: error.message });
  }
};

// app.post("/food-category", async (req: Request, res: Response) => {
//   const createdFCategory = await FoodCategory.create(req.body);
//   res.json({ success: true, foodcategory: createdFCategory });
// });

// app.get("/food-category", async (req: Request, res: Response) => {
//   const allFood = await FoodCategory.find();
//   res.json(allFood);
// });

// app.patch("/food-category/:foodCategoryId", async (req: Request, res: Response) => {
//   const {id} = req.params
//   const upfood = await FoodCategory.findById(id);
//   res.json({ success: true, update: upfood })
// });

// app.delete("/food-category/:foodCategoryId", async (req: Request, res: Response) => {
//   const {id} = req.params
//   const upfood = await FoodCategory.findById(id);
//   res.json({ success: true, update: upfood })
// });
