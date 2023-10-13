// putting the express app onto a server
import http from "http";
import { wolbachiaRecords } from "./src/services/index.js";
import { router } from "./src/routes/records.route.js";
import express from "express";

const app = express();
app.use(express.json());

// TODO: find hosting method & update info
const hostname = process.env.hostname || "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   // res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   // console.log(getRecords);
// });

app.use(router);
