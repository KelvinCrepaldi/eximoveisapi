import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";

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

export { createUserController, listUserController };
