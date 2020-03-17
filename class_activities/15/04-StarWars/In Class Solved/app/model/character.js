// /* Create a table for all your star wars characters */
// CREATE TABLE `allcharacters` (
// 	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
// 	`routeName` VARCHAR( 255) NOT NULL,
// 	`name` VARCHAR( 255 ) NOT NULL,
// 	`role` VARCHAR( 255 ) NOT NULL,
// 	`age` Int(11) NOT NULL,
// 	`forcePoints` Int(11) NOT NULL,
// 	/* Set ID as primary key */
// 	PRIMARY KEY ( `id` )
// );

// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Starwars = sequelize.define("starwars", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
}, {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
});

// Syncs with DB
Starwars.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Starwars;