import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import { AppError, handleError } from "../errors/appErrors";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { nome, email, password, adm } = req.body;
    const newUser = await createUserService({ adm, email, nome, password });

    return res.json(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listUserController = async (req: Request, res: Response) => {
  try {
    const users = await listUserService();
    return res.status(200).send(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await deleteUserService(userId);
    return res.status(204).send();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createUserController, listUserController, deleteUserController };
