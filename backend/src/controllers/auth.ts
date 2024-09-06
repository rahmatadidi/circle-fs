import { Request, Response } from "express";
import AuthService from "../services/auth";

async function login(req: Request, res: Response) {
  try {
    const user = await AuthService.login(req.body);
    res.json(user);
  } catch (error) {
    if (error === "InvalidCredentials") {
      res.status(401).json({ message: "Invalid username or password." });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
async function register(req: Request, res: Response) {
  try {
    const user = await AuthService.register(req.body);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
}
async function check(req: Request, res: Response) {
  try {
    const user = res.locals.user;
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
}

export default { login, register, check };
