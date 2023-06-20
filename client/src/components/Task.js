import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import StatusBar from "./StatusBar";

const Task = ({ task, deleteTask}) => {
  
  return (
    <div className="task">
      <h3>
        {task.description}
        <StatusBar  />
        <FaTimesCircle
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
    </div>
  );
};

export default Task;
