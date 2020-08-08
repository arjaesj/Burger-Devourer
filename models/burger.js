// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        });
    },
    insertOne: function(columns, values, callback) {
        orm.insertOne("burgers", columns, values, function(response) {
            callback(response);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;