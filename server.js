// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
var path = require("path");
// var http = require("http");
// var fs = require("fs");
var apiRouter = require("./app/routing/apiRoutes.js"); 
var htmlRouter = require("./app/routing/htmlRoutes.js");

// Express Setup
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing. Boilerplate.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));



// Server Router that maps how to user visits
// =============================================================
// require("./app/routing/apiRoutes.js")(app); 
// require("./app/routing/htmlRoutes.js")(app);

// require("./app/routing/apiRoutes.js"); 
// require("./app/routing/htmlRoutes.js");


// Basic route that sends the user first to the AJAX Page
// =============================================================
app.get("/", function(request, result) {
  result.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(request, result) {
  result.sendFile(path.join(__dirname, "./app/public/survey.html"));
});




// Starts the server and begins listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


