// Import MySQL connection.
var connection = require("../config/connection");

function printQuestionMarks(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push("?");
    };
    return array.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(object) {
    var array = [];

    // loop through the keys and push the key/value as a string in array
    for (var key in object) {
        var value = object[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(object, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {devoured: true} => ["devoured=true"]
            array.push(key + "=" + value);
        };
    };

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM with methods as keys to control the model.
var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function (table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (error, result) {
            if (error) {
                throw error;
            }

            callback(result);
        });
    },
    updateOne: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(error, result) {
          if (error) {
            throw error;
          }
    
          callback(result);
        });
    }
};

// Export the orm object for the model.
module.exports = orm;