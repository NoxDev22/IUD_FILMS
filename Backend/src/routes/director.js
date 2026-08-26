import { Router } from "express";
import { DIRECTOR_CONTROLLER } from "../controller/directorController.js";
const ROUTER = Router();

ROUTER.get("/", DIRECTOR_CONTROLLER.getAll);
ROUTER.get("/:directorId", DIRECTOR_CONTROLLER.getById);
ROUTER.post("/", DIRECTOR_CONTROLLER.create);
ROUTER.put("/:directorId", DIRECTOR_CONTROLLER.update);
ROUTER.delete("/:directorId", DIRECTOR_CONTROLLER.delete);
export default ROUTER;
