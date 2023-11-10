import express from "express";
const orderRouter = express.Router();
import { get } from "../controllers/orders.controller.js";

orderRouter.get("/", get);

export { orderRouter };
