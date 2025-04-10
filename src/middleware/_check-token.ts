import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";

export const checkToken = async (req: Request, res: Response, next) => {
  try {
    if (!req.headers["authorization"]) {
      res.status(401).json({ success: false, msg: "Unauthrization" });
      return;
    }

    const [_, token] = req.headers["authorization"].split("");

    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

if(decode.user.role !="ADMIN"){
    res.status(401).json({success:false, error:"Unauthorizition"})
}

    next();
  } catch (error) {
    res.status(401).json({ success: false, msg: error.massage });
  }
};
