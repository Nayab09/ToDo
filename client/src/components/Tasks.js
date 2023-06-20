import React from "react";
import Task from "./Task"

const Tasks =({tasks, deleteTask ,status, statusHandler})=>{
   // {console.log(tasks)}
    return(
        <>
            {tasks.map((task)=>{
               return(
                // <h3>{task.description}</h3>
                 <Task key={task._id} task ={task} deleteTask={deleteTask} status={status} statusHandler= {statusHandler} />  
               ) 
            })}
        </>
    )
}

export default Tasks;