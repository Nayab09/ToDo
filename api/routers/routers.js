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
    id : req.body.id,
    name: req.body.name,
    description: req.body.description,
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
    task.description = req.body.description;
    task.status = !todo.status;
    task.save();
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
