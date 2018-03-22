// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
var path = require("path");
// var http = require("http");
// var fs = require("fs");
var friendsList = require("../data/friends.js");


// Router: Handles result exports and user visits
// =============================================================
module.expots = function(app){
	app.get("/api/friends", function(request, result) {
		result.json(friendsList);
	});


	// app.post("/api/friends", function(request, result) {
	// 	var me = request.body;
	// 	var nextFriendScore = 0;
	// 	var newFriend = 0;
	// 	var newFriendScore = 50;
	// 	var potentialFriendsArray = [];

	// 	friendsList.forEach(function(friend) {

	// 	})




	app.post("/api/friends", function(request, result) {
		var me = request.body;
        var newFriend = 0;
        var newFriendScore = 50;
        var nextFriendScore = 0;

        // Friends calculation loops to determine which friend has the lowest difference
        for (i = 0; i < friendsList.length; i++) {
        	// nextFriendScore = nextFriendScore + math.abs(friendsList[i]);

        	// Takes the value of the next friend in the friendsList and assigns it to the next FriendScore variable
        	nextFriendScore = math.abs(friendsList[i]);

			// Checks to determine if the next friend's value is less than the current friend's value
			// and if so make the new friend's value replaces the current friend value 
			// and the new friend then becomes the current friend
        	if (nextFriendScore <= newFriendScore) {
        		newFriend = i;
        		newFriendScore = nextFriendScore;
        	}

        	console.log(newFriend);
        	// nextFriendScore = 0;
        }

        friendsList.push(me);
        newFriendFinal = friendsList[newFriend];
        result.json(newFriendFinal);

	});

}


