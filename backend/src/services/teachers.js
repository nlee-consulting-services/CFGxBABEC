import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getTeachers() {
  const res = await client.query("SELECT * FROM TEACHER");
  return res.rows;
}

export { getTeachers };
