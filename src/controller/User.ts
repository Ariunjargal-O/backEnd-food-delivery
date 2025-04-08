import { Request, Response } from "express";
import { User } from "../schema/User";
import bcrypt from "bcrypt";

const SALT_ROUND = 12;
export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const salt = bcrypt.genSaltSync(SALT_ROUND);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const createdUser = await User.create({ ...req.body, password: hash });
    res.json({ success: true });
  } catch (error) {
    if (error.code == 11000) {
      res
        .status(400)
        .json({ succes: false, error: "User and Password is wrong" });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user)
    res
      .status(400)
      .json({ success: false, error: "User and Password is wrong" });

  const isCompare = bcrypt.compareSync(password, user.password);
  if (!isCompare) {
    res
      .status(401)
      .json({ success: false, error: "User and Password is wrong" });
  }
};
//    res.status(404).json("Haven't food category");

//   .post("/", createFoodOrder)
//   .get("/", getAllFoodOrder)
//   .get("/:id", getIdFoodOrder)
//   .patch("/:id", patchIdFoodOrder);

// app.post("/user", async (req, res) => {
//     const createdUser = await User.create(req.body);
//     res.json({ success: true, createdUser: createdUser });
//   });
