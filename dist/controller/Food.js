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
exports.deleteIdFood = exports.patchIdFood = exports.getIdFood = exports.getAllFood = exports.createFood = void 0;
const Food_1 = require("../schema/Food");
const createFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield Food_1.Food.create(req.body);
        res.json({ success: true, food: created });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
    ;
});
exports.createFood = createFood;
const getAllFood = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFood = yield Food_1.Food.find();
        res.json(allFood);
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch food items" });
    }
});
exports.getAllFood = getAllFood;
const getIdFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneFood = yield Food_1.Food.findById(id);
        res.json(oneFood);
    }
    catch (error) {
        res.status(200).json("Haven't food");
    }
});
exports.getIdFood = getIdFood;
const patchIdFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateFood = yield Food_1.Food.findByIdAndUpdate(id);
        res.json(updateFood);
    }
    catch (error) {
        res.status(200).json("Haven't food");
    }
});
exports.patchIdFood = patchIdFood;
const deleteIdFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteFood = yield Food_1.Food.findByIdAndDelete(id);
        res.json({ success: true, delete: deleteFood });
    }
    catch (error) {
        res.status(200).json("Haven't food");
    }
});
exports.deleteIdFood = deleteIdFood;
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
//# sourceMappingURL=Food.js.map