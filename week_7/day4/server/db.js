
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "productlist",
});

module.exports = pool;