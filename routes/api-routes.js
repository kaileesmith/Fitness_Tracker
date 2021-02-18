const Workout = require("../models/Workout.js");

// // TO DO: recent workout, create workout and ranges for workout
module.exports = function (app) {
//     // ALL Workouts
    app.get("/api/workouts", (req, res) => {
		Workout.find({})
        Workout.aggregate([
            {
                "$addFields": {
                    "totalDuration": {
                    "$sum": "$exercises.duration",
                    },
                },
            },
        ])
        .sort({ date: -1 })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});
//     //Create workout
//     app.post("/api/workouts", (req, res) => {
// 		Workout.create({})
// });

//     // Create Exercise
    // app.put("/api/workouts/:id", (req, res) => {
		
	// });



    // Range
    // app.get("/api/workouts/range", (req, res) => {
    //     Workout.find({})
    // });