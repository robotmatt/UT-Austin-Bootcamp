const mysql = require("mysql");
const dotenv = require("dotenv").config();

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.mysqlUsername,
    password: process.env.mysqlPassword,
    database: "parties_db"
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
