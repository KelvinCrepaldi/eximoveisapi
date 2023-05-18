import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateUserService from "../services/users/updateUser.service";
import updateUserPasswordService from "../services/users/updateUserPassword.service";
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

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { email, nome } = req.body;
    const userId = req.user.id;

    await updateUserService({ email, nome }, userId);

    return res.status(200).json({ message: "User updated" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const updateUserPasswordController = async (req: Request, res: Response) => {
  try {
    const { newPassword } = req.body;
    const userId = req.user.id;

    await updateUserPasswordService({ newPassword }, userId);

    return res.status(200).json({ message: "Password updated" });
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

export {
  createUserController,
  listUserController,
  deleteUserController,
  updateUserController,
  updateUserPasswordController,
};
