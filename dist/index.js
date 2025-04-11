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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Food_1 = __importDefault(require("./routes/Food"));
const Foodcategory_1 = __importDefault(require("./routes/Foodcategory"));
const FoodOrder_1 = __importDefault(require("./routes/FoodOrder"));
const User_1 = __importDefault(require("./routes/User"));
const connection_1 = require("./utils/connection");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/foods", Food_1.default);
app.use("/food-categories", Foodcategory_1.default);
app.use("/food-orders", FoodOrder_1.default);
app.use("/users", User_1.default);
// app.use("/food", foodRouterDeleteId);
app.get("/", (_req, res) => {
    res.json("Welcome to food delivery Db sdf");
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connection)();
    return console.log(`Express is listening at http://localhost:${port}`);
}));
//# sourceMappingURL=index.js.map