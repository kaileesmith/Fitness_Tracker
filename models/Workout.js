const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            },
        ],
        day: {
            type: Date,
            default: Date.now
        },
        totalDuration: {
            type: Number
        },
        
    });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
