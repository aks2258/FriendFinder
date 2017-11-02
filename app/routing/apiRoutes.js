var friendList = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

	app.post('/api/friends', function(req, res){
		var match = {
			name: "",
			photo: "",
			friendDiff: 1000
		};

		var userData = req.body;
		friends.push(userData)
		var userRes = userData.scores;

		// console.log(userData.scores);

		var totalDifference = 0;

		for(var i = 0; i < 2; i++){
			console.log(friends[i]);
			totalDifference = 0;

			for(var j = 0; j<friends[i].score[j]; j++){
				totalDifference += Math.abs(parseInt(userScore[j])-parseInt(friends[i].scores[j]));

			if(totalDifference <= match.friendDiff){
				match.name = friends[i].name;
				match.photo = friends[i].photo;
				match.friendDiff = totalDifference;
			}
		}
	}

	friends.push(userData);
	res.json(bestMatch);

	});

};