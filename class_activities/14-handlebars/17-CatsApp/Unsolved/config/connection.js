// Set up MySQL connection.
var mysql = require("mysql");
const dotenv = require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.mysqlUsername,
  password: process.env.mysqlPassword,
  database: "cat_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
