// sample SQL query template
// use node-postgres library (run "npm install pg")
// https://node-postgres.com/
import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "bubble.db.elephantsql.com",
  database: "uehjppbc",
  user: "uehjppbc",
  password: "ZAAtTkX9ge51BxJmzqz1wROzIIoYb4OO",
});

await client.connect();

export const result = await client.query("SELECT * FROM INSECT");
console.log(result);

await client.end();
