// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = (app)=>{
    // Main index.html
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

// Exercise.html
	app.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

    //Stats.html
    app.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});
}