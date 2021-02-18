const Workout = require("../models/Workout.js");

// // TO DO: recent workout, create workout and ranges for workout
module.exports = function (app) {

//     //Create workout
    app.post("/api/workouts", (req, res) => {
		Workout.create({})
});

//     // Create Exercise
    app.put("/api/workouts/:id", (req, res) => {
		
	});

//     // ALL Workouts
//     app.get("/api/workouts", (req, res) => {
// 		Workout.find({})
    
// 	});


    // Range
    // app.get("/api/workouts/range", (req, res) => {
    //     Workout.find({})
    // });