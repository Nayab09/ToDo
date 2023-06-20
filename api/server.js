const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Tasks = require("./model/model");
const router = require('./routers/routers')

const PORT = 5003;
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost/tasks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);



app.get("/tasks", async (req, res) => {
  const tasks = await Tasks.find();

  res.json(tasks);
});

app.use('/tasks',router)

app.listen(PORT, () => console.log(`running on port ${PORT}`));
