import { Router } from "express";
import { getDogById } from "../controllers/dogController.js";

const dogRouter = Router();

dogRouter.get("/:dogId", getDogById);

export default dogRouter;
