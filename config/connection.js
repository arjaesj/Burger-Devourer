var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWS_URL) {
    connection = mysql.createConnection(process.env.JAWS_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PASSWORD,
        database: "burgers_db"
    });
};


connection.connect(function(error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;