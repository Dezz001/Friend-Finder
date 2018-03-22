// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
var path = require("path");
// var http = require("http");
// var fs = require("fs");
// var friendsList = require("../data/friends.js");


// Router
// =============================================================

module.export = function(app){
	app.get("/", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/home.html"));
	});

	app.get("/survey", function(request, result) {
		result.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

};

// console.log(module.export)