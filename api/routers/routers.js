const express = require("express");
const router = express.Router();
const Tasks = require("./../model/model");

// get task by id

router.get("/:id", async (req, res) => {
  let task = await Tasks.findById(req.params.id);
  res.json(task);
});

// Create A NEW TASK

router.post("/new", (req, res) => {
  const task = new Tasks({
    taskId : req.body.id,
    name: req.body.name,
    description: req.body.description,
    startDate : req.body.startDate,
    endDate : req.body.endDate,
    priority : req.body.priority,
    ownerName : req.body.ownerName,
    status : req.body.status

  });
  task.save();
  res.json(task);
});
// DELETE THE TASK
router.delete("/delete/:id", async (req, res) => {
  const dlt = await Tasks.findByIdAndDelete(req.params.id);
  res.json(dlt);
});

//Edit the task

router.put("/edit/:id", async (req, res) => {
  let task;
  try {
    task = await Tasks.findById(req.params.id);
    task.taskId = req.body.id,
    task.name= req.body.name,
    task.description= req.body.description,
    task.startDate = req.body.startDate,
    task.endDate =req.body.endDate,
    task.priority  =req.body.priority,
    task.ownerName = req.body.ownerName,
    task.status = req.body.status
    task.save();
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
