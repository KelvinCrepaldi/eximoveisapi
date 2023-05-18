import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import * as bcrypt from "bcryptjs";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appErrors";

const verifyPasswordMatchMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const id = req.user.id;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return res.status(403).json({
      message: "Password not match",
    });
  }

  next();
};

export default verifyPasswordMatchMiddleware;
