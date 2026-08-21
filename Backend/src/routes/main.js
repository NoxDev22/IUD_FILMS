import { Router } from "express";
import { CONTROLLER } from "../controller/controller.js";
const ROUTER = Router();

ROUTER.get("/", CONTROLLER.getAll);
ROUTER.get("/:filmId", CONTROLLER.getById);
ROUTER.post("/", CONTROLLER.create);
ROUTER.put("/:filmId", CONTROLLER.update);
ROUTER.delete("/:filmId", CONTROLLER.delete);
export default ROUTER;
