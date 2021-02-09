const Workout = require("../models/Workout.js");

// TO DO: recent workout, create workout and ranges for workout
module.exports = function (app) {

    //Create workout
    app.post("/api/workouts", (req, res) => {
		
	});

    // Create Exercise
    app.put("/api/workouts", (req, res) => {
		
	});

    // ALL Workouts
    app.get("/api/workouts", (req, res) => {
		Workout.find({})
    
	});


    // Range