const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "bookstore",
  password: "amanthakur",
});

module.exports = pool.promise();
