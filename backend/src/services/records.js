// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import { readFile } from "fs/promises";
import { textForCreateRecord, formatRecord } from "../utils/formatRecord.js";
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
  // const valueArray = Object.values(values);
  // const formattedValues = formatRecord(values);
  // console.log(formattedValues);
  // console.log(textForCreateRecord);
  const res = await client.query(textForCreateRecord, formatRecord(values));
  return res.rows[0];
}

export { getRecords, createRecord };

// await client.end();
