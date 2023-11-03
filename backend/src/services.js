import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "./utils/clientInitializer.js";
import {
  getTextForGetRecord,
  getTextForCreateRecord,
} from "./utils/formatRecord.js";
import { applyFilters } from "./utils/filterRecord.js";

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

async function getOrders() {
  const res = await client.query("SELECT * FROM INSECT_ORDER");
  return res.rows;
}

async function getStudents(params) {
  const queryText = `SELECT * FROM STUDENT${
    params.teacher_id ? ` WHERE TEACHER_ID = ${params.teacher_id}` : ""
  }`;
  const res = await client.query(queryText);
  return res.rows;
}

async function getTeachers(params) {
  const queryText = `SELECT * FROM TEACHER${
    params.org_id ? ` WHERE ORG_ID = ${params.org_id}` : ""
  }`;
  const res = await client.query(queryText);
  return res.rows;
}

async function getOrgs() {
  const res = await client.query("SELECT * FROM ORGANISATION");
  return res.rows;
}

export {
  getRecords,
  createRecord,
  getOrders,
  getStudents,
  getTeachers,
  getOrgs,
};
