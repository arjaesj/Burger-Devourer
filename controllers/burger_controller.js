var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var cat = require("../models/burger");
const burger = require("../models/burger");

// Route to select all burger
router.get("/burger", function(req, res) {
    burger.all(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

//   Route to create burger
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

//   Route to update burger
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;