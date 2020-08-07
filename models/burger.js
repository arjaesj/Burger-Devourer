// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        });
    },
    insertOne: function() {
        orm.insertOne("burgers", function(response) {
            callback(response);
        });
    },
    updateOne: function() {
        orm.updateOne("burgers", function(response) {
            callback(response);
        });
    }
};

module.exports = burger;