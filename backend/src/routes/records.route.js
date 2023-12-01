import express from "express";
const recordRouter = express.Router();
import { get, create } from "../controllers/records.controller.js";

recordRouter.get("/", get);

recordRouter.post("/", create);

export { recordRouter };
