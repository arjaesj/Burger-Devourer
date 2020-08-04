// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.all("burgers", fuction(response) {
            callback(response);
        });
    },
    insertOne: function() {
        orm.create("burgers", fuction(response) {
            callback(response);
        });
    },
    updateOne: function() {
        orm.update("burgers", fuction(response) {
            callback(response);
        });
    }
};

module.exports = burger;