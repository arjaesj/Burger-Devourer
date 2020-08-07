var express = require("express");

var router = express.Router();

// Import the model to use its database functions
const burger = require("../models/burger");

// Route to select all burger
router.get("/burgers", function(request, response) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

//   Route to create burger
router.post("/api/burgers", function(request, response) {
    burger.insertOne(["burger_name", "devoured"], [request.body.name, request.body.devoured], function(result) {
        // Send back the ID of the new quote
        response.json({ id: result.insertId });
    });
});

//   Route to update burger
router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.updateOne({
            devoured: request.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return response.status(404).end();
            }
            response.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;