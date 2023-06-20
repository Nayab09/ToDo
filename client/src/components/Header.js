import React  from "react";
import AddTask from "./AddTask"

const Header =({title,addTask})=>{  // property which is passed when the function is used

    const onClick = ()=>{
        console.log('click')
    }
    return(
        <header className="header">
            <h1>
                {title}
            </h1>
           <AddTask color='green' addTask={addTask} />
        </header>
    )
}

Header.defaultProps ={
    title :'Task Tracker',
}



export default Header;