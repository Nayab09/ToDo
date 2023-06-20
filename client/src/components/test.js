import React,{useEffect,useState} from "react";
import axios from "axios";

const EffectFunc=()=>{
const [state,setState] = useState("");



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            setState(res.data[8].email)
        })
        .catch((err)=>console.log(err));
    },[])

    return(
        <h1>Hello {state} </h1>
    )
}

export default EffectFunc;
