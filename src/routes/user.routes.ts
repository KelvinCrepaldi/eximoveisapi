import Router from "express";
import {
  createUserController,
  listUserController,
} from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.Middleware";
import { deleteUserController } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  isAdmUserMiddleware,
  listUserController
);
userRoutes.delete("/:userId", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
