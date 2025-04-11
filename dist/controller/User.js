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
exports.login = exports.createUser = void 0;
const User_1 = require("../schema/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SALT_ROUND = 12;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        const salt = bcrypt_1.default.genSaltSync(SALT_ROUND);
        const hash = bcrypt_1.default.hashSync(req.body.password, salt);
        const createdUser = yield User_1.User.create(Object.assign(Object.assign({}, req.body), { password: hash }));
        res.json({ success: true, createdUser });
    }
    catch (error) {
        console.log(error);
        // if (error.code == 11000) {
        //   res
        //     .status(400)
        //     .json({ succes: false, error: "User and Password is wrong" });
        //   return;
        // }
        res.send({ error });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.User.findById({ email: email });
    if (!user)
        res
            .status(400)
            .json({ success: false, error: "User and Password is wrong" });
    const isCompare = bcrypt_1.default.compareSync(password, user.password);
    if (!isCompare) {
        res
            .status(401)
            .json({ success: false, error: "User and Password is wrong" });
    }
    const token = jsonwebtoken_1.default.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: "1h",
    });
});
exports.login = login;
// var jwt = require("jsonwebtoken");
// var token = jwt.sign({ foo: "bar" }, "shhhhh");
//    res.status(404).json("Haven't food category");
//   .post("/", createFoodOrder)
//   .get("/", getAllFoodOrder)
//   .get("/:id", getIdFoodOrder)
//   .patch("/:id", patchIdFoodOrder);
// app.post("/user", async (req, res) => {
//     const createdUser = await User.create(req.body);
//     res.json({ success: true, createdUser: createdUser });
//   });
//# sourceMappingURL=User.js.map