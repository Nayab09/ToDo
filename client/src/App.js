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

  //Get Tasks
  const GetTasks = () => {
    fetch(API + "/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch(API + "/tasks/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    res.status===200?
    setTasks([...tasks, data]):alert('Error adding the task');
  };

  //Edit the task
  const editTask = async (task) => {
    const res = await fetch(API + "/tasks/edit/id", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    res.status===200?
    setTasks([...tasks, data]):alert('Error adding the task');
  };

  //Delete task
  const deleteTask = async (id) => {
    const data = await fetch(API + "/tasks/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
   
    setTasks((tasks) => tasks.filter((task) => task.id !== data.id));
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
