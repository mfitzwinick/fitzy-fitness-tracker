const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: ()=> new Date()
            },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Must specify type"
                },
                    name: {
                        type: String,
                        trim: true,
                    required: "Must specify name"
                    },
                    duration: {
                    type:number
                },
                    weight: {
                        type: number
                    },
                    reps: {
                        type: number
                    },
                    sets: {
                        type:number
                    }

                }]});

                
const Workout=mongoose.model("Workout", WorkoutSchema);
module.exports =Workout;