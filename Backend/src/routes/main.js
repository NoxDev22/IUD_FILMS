import { Router } from "express";
import { CONTROLLER } from "../controller/controller.js";
const ROUTER = Router();

ROUTER.get("/", CONTROLLER.getAll);

export default ROUTER;
