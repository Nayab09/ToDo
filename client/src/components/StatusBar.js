import React,{useState} from "react";

const StatusBar = ({status,setStatus}) => {
  //   const[status,setStatus] = useState('');
  
  // //set status 
  // const statusHandler =(event)=>{
  //   setStatus(event.target.value)
  // }
  return (
    <div>
      <select className="select" value={status} onChange={(event) =>setStatus(event.target.value)} >
        <option selected className="options" >Select Status</option>
        <option value="1">Open</option>
        <option value="2">Inprogress</option>
        <option value="3">Completed</option>
      </select>
    </div>
  );
};


export default StatusBar;