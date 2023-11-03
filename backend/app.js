import { orderRouter } from "./src/routes/orders.route.js";
import { recordRouter } from "./src/routes/records.route.js";
import express from "express";
import { studentRouter } from "./src/routes/students.route.js";
import { orgRouter } from "./src/routes/orgs.route.js";
import { teacherRouter } from "./src/routes/teachers.route.js";

const app = express();
app.use(express.json());

const hostname = process.env.hostname || "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use("/records", recordRouter);
app.use("/orders", orderRouter);
app.use("/students", studentRouter);
app.use("/orgs", orgRouter);
app.use("/teachers", teacherRouter);
