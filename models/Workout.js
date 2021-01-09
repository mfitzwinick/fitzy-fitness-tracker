const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: ()=> new Date()
        },
        exercises: [
            {
                type: {
                    type: String,

                }
            }
        ]
        }
)
const Workouts=mongoose.model("Workout", WorkoutSchema);
module.exports =Workouts;