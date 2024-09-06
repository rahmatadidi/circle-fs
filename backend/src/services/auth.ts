import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginDTO } from "../dto/login-dto";
import { RegisterDTO } from "../dto/register-dto";
import { loginSchema, registerSchema } from "../validator/auth";

const prisma = new PrismaClient();

async function login(dto: LoginDTO) {
  try {
    const validate = loginSchema.validate(dto);
    if (validate.error) {
      return validate.error;
    }
    const user = await prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new Error("user not found!");
    // delete user.password;

    const isValidPassword = await bcrypt.compare(
      dto.password,
      user.password ?? ""
    );
    if (!isValidPassword) throw new Error("user not found!");
    {
      const jwtSecret = process.env.JWT_SECRET;
      const token = jwt.sign(user, jwtSecret);
      return { token, user };
    }
  } catch (error) {
    throw new Error("user not found!");
  }
}
async function register(dto: RegisterDTO) {
  try {
    const validate = registerSchema.validate(dto);
    const salt = 10;
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    dto.password = hashedPassword;
    if (validate.error) {
      return validate.error;
    }
    return await prisma.user.create({
      data: { ...dto },
    });
  } catch (error) {
    return error;
  }
}

export default { login, register };
