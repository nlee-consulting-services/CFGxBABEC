// sample SQL query template

import { Client } from "pg";

const client = new Client({
  //   host: 'my.database-server.com',
  //   port: 5334,
  //   database: 'database-name',
  //   user: 'database-user',
  //   password: 'secretpassword!!',
});

await client.connect();

const result = await client.query("SELECT NOW()");
console.log(result);

await client.end();
