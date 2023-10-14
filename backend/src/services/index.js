// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import { readFile } from "fs/promises";
const secrets = JSON.parse(
  await readFile(new URL("../../secrets.json", import.meta.url))
);
// import secrets from "../../secrets.json" assert { type: "json" };

const client = new Client({
  host: "bubble.db.elephantsql.com",
  database: "uehjppbc",
  user: "uehjppbc",
  password: secrets.dbpw,
});

await client.connect();

const getRecords = await client.query("SELECT * FROM RECORD");

async function createRecord(values) {
  await client.query("INSERT INTO USERS VALUES RETURNING *");
}

export { getRecords, createRecord };

await client.end();
