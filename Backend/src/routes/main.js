import { Router } from "express";
import { FILM_CONTROLLER } from "../controller/filmController.js";
const ROUTER = Router();

ROUTER.get("/", FILM_CONTROLLER.getAll);
ROUTER.get("/:filmId", FILM_CONTROLLER.getById);
ROUTER.post("/", FILM_CONTROLLER.create);
ROUTER.put("/:filmId", FILM_CONTROLLER.update);
ROUTER.delete("/:filmId", FILM_CONTROLLER.delete);
export default ROUTER;
