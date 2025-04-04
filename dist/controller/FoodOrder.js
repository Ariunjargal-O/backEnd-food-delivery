"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchIdFoodOrder = exports.getIdFoodOrder = exports.getAllFoodOrder = exports.createFoodOrder = void 0;
const FoodOrder_1 = require("../schema/FoodOrder");
const createFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdFCategory = yield FoodOrder_1.FoodOrder.create(req.body);
        res.json({ success: true, foodcategory: createdFCategory });
    }
    catch (error) {
        res.status(200).json("Haven't food order");
    }
});
exports.createFoodOrder = createFoodOrder;
const getAllFoodOrder = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFood = yield FoodOrder_1.FoodOrder.find();
        res.json(allFood);
    }
    catch (error) {
        res.status(200).json("Haven't food order");
    }
});
exports.getAllFoodOrder = getAllFoodOrder;
const getIdFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneFood = yield FoodOrder_1.FoodOrder.findById(id);
        res.json(oneFood);
    }
    catch (error) {
        res.status(200).json("Haven't food order");
    }
});
exports.getIdFoodOrder = getIdFoodOrder;
const patchIdFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneFood = yield FoodOrder_1.FoodOrder.findByIdAndUpdate(id);
        res.json(oneFood);
    }
    catch (error) {
        res.status(200).json("Haven't food order");
    }
});
exports.patchIdFoodOrder = patchIdFoodOrder;
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
//# sourceMappingURL=FoodOrder.js.map