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

async function createStudent(params) {
  const queryText = `INSERT INTO STUDENT (TEACHER_ID, NAME_INITIAL) VALUES (${
    params.teacher_id
  }, E'${params.name_initial.replaceAll("'", "\\'")}')`;
  console.log(queryText);
  const res = await client.query(queryText);
  return res.rows[0];
}

async function getTeachers(params) {
  const queryText = `SELECT * FROM TEACHER${
    params.org_id ? ` WHERE ORG_ID = ${params.org_id}` : ""
  }`;
  const res = await client.query(queryText);
  return res.rows;
}

async function createTeacher(params) {
  const queryText = `INSERT INTO TEACHER (ORG_ID, TEACHER_LAST_NAME) VALUES (${
    params.org_id
  }, E'${params.teacher_last_name.replaceAll("'", "\\'")}')
  `;
  console.log(queryText);
  const res = await client.query(queryText);
  return res.rows[0];
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
  createStudent,
  getTeachers,
  createTeacher,
  getOrgs,
};
