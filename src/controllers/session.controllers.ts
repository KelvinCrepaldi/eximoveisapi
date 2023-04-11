import { Request, Response } from "express";
import createSessionUserService from "../services/sessions/createSessionUser.service";
import { AppError, handleError } from "../errors/appErrors";

const createUserSessionController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await createSessionUserService({
      email,
      password,
    });

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createUserSessionController };
