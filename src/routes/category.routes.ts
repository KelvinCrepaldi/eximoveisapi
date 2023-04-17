import { Router } from "express";
import { createCategoryController } from "../controllers/category.controller";
import { listCategoryController } from "../controllers/category.controller";
import { listCategoryPropertiesController } from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.post("", createCategoryController);
categoryRoutes.get("", listCategoryController);
categoryRoutes.get("/:id/properties", listCategoryPropertiesController);

export default categoryRoutes;
