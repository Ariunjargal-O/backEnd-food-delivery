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
exports.getCategoryWithFoods = exports.deleteIdFoodcategory = exports.patchIdFoodcategory = exports.getIdFoodcategory = exports.getAllFoodcategory = exports.createFoodcategory = void 0;
const FoodCategory_1 = require("../schema/FoodCategory");
const createFoodcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdFCategory = yield FoodCategory_1.FoodCategory.create(req.body);
        res.json({ success: true, foodcategory: createdFCategory });
    }
    catch (error) {
        res.status(404).json("Haven't food category");
    }
});
exports.createFoodcategory = createFoodcategory;
const getAllFoodcategory = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFood = yield FoodCategory_1.FoodCategory.find();
        res.json(allFood);
    }
    catch (error) {
        res.status(404).json("Haven't food category");
    }
});
exports.getAllFoodcategory = getAllFoodcategory;
const getIdFoodcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneFood = yield FoodCategory_1.FoodCategory.findById(id);
        res.json(oneFood);
    }
    catch (error) {
        res.status(404).json("Haven't food category");
    }
});
exports.getIdFoodcategory = getIdFoodcategory;
const patchIdFoodcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const upfood = yield FoodCategory_1.FoodCategory.findById(id);
        res.json({ success: true, update: upfood });
    }
    catch (error) {
        res.status(404).json("Haven't food category");
    }
});
exports.patchIdFoodcategory = patchIdFoodcategory;
const deleteIdFoodcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const delfood = yield FoodCategory_1.FoodCategory.findById(id);
        res.json({ success: true, update: delfood });
    }
    catch (error) {
        res.status(404).json("Haven't food category");
    }
});
exports.deleteIdFoodcategory = deleteIdFoodcategory;
const getCategoryWithFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield FoodCategory_1.FoodCategory.aggregate([
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
    }
    catch (error) {
        res.status(404).json({ success: true, error: error.message });
    }
});
exports.getCategoryWithFoods = getCategoryWithFoods;
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
//# sourceMappingURL=Foodcategory.js.map