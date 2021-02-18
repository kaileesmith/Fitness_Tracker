// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

    // Main index.html
	router.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

// Exercise.html
	router.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

    //Stats.html
    router.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});

module.exports = router	