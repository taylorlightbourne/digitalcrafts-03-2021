
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Righteous!1",
  host: "localhost",
  port: 5432,
  database: "pizzalist",
});

module.exports = pool;