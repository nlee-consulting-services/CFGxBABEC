import express from "express";
const teacherRouter = express.Router();
import { get, create } from "../controllers/teachers.controller.js";

teacherRouter.get("/", get);

teacherRouter.post("/", create);

export { teacherRouter };
