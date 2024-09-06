import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Unautorizaed!!",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("user", user);
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Unautorizaed!!",
    });
  }
}
