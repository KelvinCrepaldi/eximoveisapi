import { Router } from "express";
import { createUserSessionController } from "../controllers/session.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", createUserSessionController);

export default sessionRoutes;
