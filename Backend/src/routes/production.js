import { Router } from "express";
import { PRODUCTION_CONTROLLER } from "../controller/productionController.js";
const ROUTER = Router();

ROUTER.get("/", PRODUCTION_CONTROLLER.getAll);
ROUTER.get("/:productionId", PRODUCTION_CONTROLLER.getById);
ROUTER.post("/", PRODUCTION_CONTROLLER.create);
ROUTER.put("/:productionId", PRODUCTION_CONTROLLER.update);
ROUTER.delete("/:productionId", PRODUCTION_CONTROLLER.delete);
export default ROUTER;
