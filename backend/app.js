import { recordRouter } from "./src/routes/records.route.js";
import express from "express";

const app = express();
app.use(express.json());

const hostname = process.env.hostname || "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use("/records", recordRouter);
