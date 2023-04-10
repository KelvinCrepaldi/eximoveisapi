import { Request, Response } from "express";
import createSessionUserService from "../services/sessions/createSessionUser.service";

const createUserSessionController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await createSessionUserService({
      email,
      password,
    });

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export { createUserSessionController };
