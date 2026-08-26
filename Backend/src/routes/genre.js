import { Router } from "express";
import { GENRE_CONTROLLER } from "../controller/genreController.js";
const ROUTER = Router();

ROUTER.get("/", GENRE_CONTROLLER.getAll);
ROUTER.get("/:genreId", GENRE_CONTROLLER.getById);
ROUTER.post("/", GENRE_CONTROLLER.create);
ROUTER.put("/:genreId", GENRE_CONTROLLER.update);
ROUTER.delete("/:genreId", GENRE_CONTROLLER.delete);
export default ROUTER;
