import React, { useState } from "react";


function Time(){

    const [calories,set] = useState(0)
    function getCalories(){
       set(calories+105);
    }
    function getCalories2(){
        set(calories+265);
     }

    return(
        <div className="container2">
            <h1>Calories</h1>
            <h1>{calories}</h1>
            <button onClick={getCalories}>Banana++</button>
            <button onClick={getCalories2}>Paneer++</button>
        </div>
    )
}

export default Time;