// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", function (req, res) {
    let query = "SELECT * from chirps;"
    //console.log(query);
    connection.query(query, function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      console.log(data);
      res.json( data ); 
    });
  });

  // Add a chirp
  app.post("/api/new", function (req, res) {
    console.log(req);
    connection.query("INSERT INTO chirps (author, chirp) VALUES (?,?)", [req.body.author, req.body.body], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      console.log(data);
      res.json( data ); 
    });
  });

};