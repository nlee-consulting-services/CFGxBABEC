// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import { readFile } from "fs/promises";
import {
  getTextForCreateRecord,
  formatRecord,
  getTextForGetRecord,
} from "../utils/formatRecord.js";
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

async function getRecords(params) {
  const textForGetRecord = getTextForGetRecord(params);
  console.log(textForGetRecord);
  const res = await client.query(textForGetRecord);
  return res.rows;
}

async function createRecord(values) {
  const res = await client.query(
    getTextForCreateRecord(),
    formatRecord(values)
  );
  return res.rows[0];
}

export { getRecords, createRecord };

// await client.end();
