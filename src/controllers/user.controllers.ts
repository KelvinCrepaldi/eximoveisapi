import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { nome, email, password, adm } = req.body;
    const newUser = await createUserService({ adm, email, nome, password });

    return res.json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        name: err.name,
        message: err.message,
      });
    }
  }
};

const listUserController = async (req: Request, res: Response) => {
  try {
    const users = await listUserService();
    return res.status(200).send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        name: err.name,
        message: err.message,
      });
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await deleteUserService(userId);
    return res.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        name: err.name,
        message: err.message,
      });
    }
  }
};

export { createUserController, listUserController, deleteUserController };
