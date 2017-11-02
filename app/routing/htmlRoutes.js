var path = require('path');

module.exports = function(app) {

	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/view.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// app.get("/tables", function(req, res) {
	//   res.sendFile(path.join(__dirname, "../public/tables.html"));
	// });
	
};