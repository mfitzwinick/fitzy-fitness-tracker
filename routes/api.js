const router = require("express").Router();
const Workout = require("../models");

router.post("/api/workouts",(req,res) => {
Workout.create({exercises})
.then(Workout) => {
  console.log(WTH?)
    res.json(WokoutSchema);
})
.catch(err => {
    res.json(err)
});
});

router.put("/api/workouts/:id",({body,params}, res) =>{
    db.exercises.update(
      {
        _id: mongojs.ObjectId(params.id)
      },
      {
        $set: {
          read: true
        }
      },
  
      (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });
