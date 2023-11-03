import express from "express";
const orgRouter = express.Router();
import { get } from "../controllers/orgs.controller.js";

orgRouter.get("/", get);

export { orgRouter };
