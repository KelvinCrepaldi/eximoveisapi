import { Router } from "express";
import { createPropertyController } from "../controllers/property.controllers";
import { listPropertyController } from "../controllers/property.controllers";

const propertyRoutes = Router();

propertyRoutes.post("", createPropertyController);
propertyRoutes.get("", listPropertyController);

export default propertyRoutes;
