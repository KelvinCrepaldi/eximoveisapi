import Router from "express";
import {
  createUserController,
  listUserController,
  updateUserController,
  updateUserPasswordController,
  deleteUserController,
} from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.Middleware";
import verifyPasswordMatchMiddleware from "../middlewares/verifyPasswordMatch.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);

userRoutes.get(
  "",
  ensureAuthMiddleware,
  isAdmUserMiddleware,
  listUserController
);

userRoutes.patch(
  "/",
  ensureAuthMiddleware,
  verifyPasswordMatchMiddleware,
  updateUserController
);

userRoutes.patch(
  "/password",
  ensureAuthMiddleware,
  verifyPasswordMatchMiddleware,
  updateUserPasswordController
);

userRoutes.delete("/:userId", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
