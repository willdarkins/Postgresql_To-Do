
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Finley2021!",
  host: "localhost",
  port: 5432,
  database: "postgresql_todo"
});

module.exports = pool;


