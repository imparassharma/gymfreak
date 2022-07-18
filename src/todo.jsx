import React, { useState } from "react";

function TaskList(){

    const [task,setTask] = useState("")

    const [items,setItem] = useState([])
    function handleChange(event){

        const value = event.target.value;
        setTask(value )
    }

    function addItems(){

        setItem(preValue=>{
            return [...preValue,task];
        })

        setTask("");

    }

    return(
        <div className="tasklist">
             <div className="task-container">
               <ul>
                    {items.map(item => <li>{item}</li>)}
               </ul>
            </div>
            <div className="input-container">
                <input className="taskname" type="text" onChange={handleChange} value={task}></input>
                <button onClick={addItems}>Add+</button>
            </div>
        </div>
    )
}


export default TaskList;