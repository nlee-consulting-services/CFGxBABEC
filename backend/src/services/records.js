// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;
import {
  getTextForCreateRecord,
  formatRecord,
  getTextForGetRecord,
} from "../utils/formatRecord.js";
import { applyFilters } from "../utils/filterRecord.js";
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getRecords(params) {
  const textForGetRecord = getTextForGetRecord(params);
  const res = await client.query(textForGetRecord);
  const filteredData = applyFilters(res.rows, params);
  return filteredData;
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
