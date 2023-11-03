// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import { readFile } from "fs/promises";
const secrets = JSON.parse(
  await readFile(new URL("../../secrets.json", import.meta.url))
);

const client = new Client({
  host: "bubble.db.elephantsql.com",
  database: "uehjppbc",
  user: "uehjppbc",
  password: secrets.dbpw,
});

await client.connect();

async function getOrders() {
  const res = await client.query("SELECT * FROM INSECT_ORDER");
  return res.rows;
}

export { getOrders };

// await client.end();
