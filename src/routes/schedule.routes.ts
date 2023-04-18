import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createScheduleController } from "../controllers/schedule.controllers";
const scheduleRoutes = Router();

scheduleRoutes.post("", ensureAuthMiddleware, createScheduleController);
scheduleRoutes.get("");

export default scheduleRoutes;
