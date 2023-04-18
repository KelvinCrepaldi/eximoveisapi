import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createScheduleController } from "../controllers/schedule.controllers";
import { listSchedulePropertiesController } from "../controllers/schedule.controllers";
import isAdmUserMiddleware from "../middlewares/isAdmUser.Middleware";
const scheduleRoutes = Router();

scheduleRoutes.post("", ensureAuthMiddleware, createScheduleController);
scheduleRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  isAdmUserMiddleware,
  listSchedulePropertiesController
);

export default scheduleRoutes;
