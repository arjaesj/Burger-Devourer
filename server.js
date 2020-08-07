var express = require("express");
var exphbs = require("express-handlebars");


var server = express();

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");
server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

//public
server.use(express.static("public"));
// Parse request body as JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

var routes = require("./controllers/burger_controller")

server.use(routes);

server.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
