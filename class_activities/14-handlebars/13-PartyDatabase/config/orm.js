let connection = require("./connection.js");

let orm = {
    selectAll: function (table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("--------------------");
        });
    }
};

module.exports = orm;

// * Create an `orm.js` file, and make an ORM that will do the following:

//   * Console log all the party names.
//   * Console log all the client names.
//   * Console log all the parties that have a party-type of grown-up.
//   * Console log all the clients and their parties.