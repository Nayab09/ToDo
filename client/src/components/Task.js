import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import EditTask from "./EditTask";


const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {task.name}
       {/* <EditTask /> */}
        <FaTimesCircle
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(task._id)}
        />
      </h3>
      <p>{task.status}</p>
    </div>
  );
};

export default Task;
