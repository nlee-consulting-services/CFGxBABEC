import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getStudents(params) {
  const queryText = `SELECT * FROM STUDENT${
    params.teacher_id ? ` WHERE TEACHER_ID = ${params.teacher_id}` : ""
  }`;
  console.log(queryText);
  const res = await client.query(queryText);
  return res.rows;
}

export { getStudents };
