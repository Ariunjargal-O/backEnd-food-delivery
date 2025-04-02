import { Food } from "../schema/Food";
import { Request, Response } from "express";

export const createFood = async (req: Request, res: Response) => {
  try {
    const created = await Food.create(req.body);
    res.json({ success: true, food: created });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create food" });
  }
};

export const getAllFood = async (_req: Request, res: Response) => {
  try {
    const allFood = await Food.find();
    res.json(allFood);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch food items" });
  }
};

export const getIdFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const oneFood = await Food.findById(id);
    res.json(oneFood);
  } catch (error) {
    res.status(200).json("Haven't food");
  }
};

export const patchIdFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateFood = await Food.findByIdAndUpdate(id);
    res.json(updateFood);
  } catch (error) {
    res.status(200).json("Haven't food");
  }
};

export const deleteIdFood = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteFood = await Food.findByIdAndDelete(id);
    res.json({ success: true, delete: deleteFood });
  } catch (error) {
    res.status(200).json("Haven't food");
  }
};

//   // app.delete("/food", async (req: Request, res: Response ) => {
//   // const deleteAllFood = await Food.deleteMany();
//   // res.json({ success: true, delete: deleteAllFood });
//   // })

//   app.delete("/food/:id", async (req: Request, res: Response ) => {
//     const {id} = req.params
//     const deleteFood = await Food.findById(id);
//     res.json({ success: true, delete: deleteFood });
//     })

//   app.patch("/food/:id", async (req: Request, res: Response ) => {
//     const {id} = req.params
//     const updateFood = await Food.findById(id)
//     res.json({ success: true, update: updateFood })
//   })
