import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

function App() {
  const API = "http://localhost:5003";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetTasks();
    console.log("use effect");
  }, []);

  const GetTasks = () => {
    // console.log("inside get ")
    fetch(API + "/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
    // console.log("after get")
  };

  //Add Task
  const addTask =(task)=>{
    console.log(task)

  }

  //Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header addTask={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
