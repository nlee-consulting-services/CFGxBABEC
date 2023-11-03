// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getOrders() {
  const res = await client.query("SELECT * FROM INSECT_ORDER");
  return res.rows;
}

export { getOrders };

// await client.end();
