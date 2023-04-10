import Router from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUserController);

export default userRoutes;
