import { Router } from "express";
import { TYPE_CONTROLLER } from "../controller/typeController.js";
const ROUTER = Router();

ROUTER.get("/", TYPE_CONTROLLER.getAll);
ROUTER.get("/:typeId", TYPE_CONTROLLER.getById);
ROUTER.post("/", TYPE_CONTROLLER.create);
ROUTER.put("/:typeId", TYPE_CONTROLLER.update);
ROUTER.delete("/:typeId", TYPE_CONTROLLER.delete);
export default ROUTER;
