const Workout = require("../models/Workout.js");

// // TO DO: recent workout, create workout and ranges for workout
module.exports = (app)=> {
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
app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

//     // Create Exercise
    app.put("/api/workouts/:id", (req, res) => {
		Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then((result) => {
                console.log(result);
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
});


    // Range
    // app.get("/api/workouts/range", (req, res) => {
    //     Workout.find({})
    // });
};