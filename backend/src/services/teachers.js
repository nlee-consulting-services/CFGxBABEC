import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getTeachers(params) {
  const queryText = `SELECT * FROM TEACHER${
    params.org_id ? ` WHERE ORG_ID = ${params.org_id}` : ""
  }`;
  console.log(queryText);
  const res = await client.query(queryText);
  return res.rows;
}

export { getTeachers };
