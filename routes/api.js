const router = require("express").Router();
const Workout = require("../public/workout.js");

router.post("/api/workouts",(req,res) => {
Workout.create({})
.then(dbWorkout =>{
    res.json(dbWorkout);
})
.catch(err => {
    res.json(err)
});
});

router.put("/api/workouts/:id",({body,params}, res) =>
