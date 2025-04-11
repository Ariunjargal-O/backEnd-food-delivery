import { Request, Response } from "express";
import { User } from "../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";


const SALT_ROUND = 12;
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req);
    
    const salt = bcrypt.genSaltSync(SALT_ROUND);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const createdUser = await User.create({ ...req.body, password: hash });

    res.json({ success: true, createdUser });
  } catch (error) {
    console.log(error);

    if (error.code == 11000) {
      res
        .status(400)
        .json({ succes: false, error: "User and Password is wrong" });
      return;
    }

    res.send({ error });
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

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "1h",
  });


  const decoded = jwtDecode(token)
  
  
  // verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
};

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
