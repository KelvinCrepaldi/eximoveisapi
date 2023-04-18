import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";
import { listCategoryController } from "../controllers/category.controller";
import { listCategoryPropertiesController } from "../controllers/category.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.Middleware";
const categoryRoutes = Router();

categoryRoutes.post(
  "",
  ensureAuthMiddleware,
  isAdmUserMiddleware,
  createCategoryController
);
categoryRoutes.get("", ensureAuthMiddleware, listCategoryController);
categoryRoutes.get(
  "/:id/properties",
  ensureAuthMiddleware,
  listCategoryPropertiesController
);

export default categoryRoutes;
