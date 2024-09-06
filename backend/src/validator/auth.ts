import joi from "joi";
import { LoginDTO } from "../dto/login-dto";
import { RegisterDTO } from "../dto/register-dto";

export const loginSchema = joi.object<LoginDTO>({
  email: joi.string().required(),
  password: joi.string().required(),
});
export const registerSchema = joi.object<RegisterDTO>({
  email: joi.string().required(),
  password: joi.string().min(5).required(),
  fullname: joi.string(),
  username: joi.string().required().min(3),
});
