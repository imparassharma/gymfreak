import React, { useState } from "react";


function App(){

    const [isDone1,progress1] = useState(false);
    const [isDone2,progress2] = useState(false);
    function taskDone1(){
        progress1(true);
    }
    function taskDone2(){
        progress2(true);
    }

    const strike = {textDecoration:"line-through"};

    return(
        <div className="container">
            <div className="task">
                <p style={isDone1?strike:null}>Buy Bananas</p>
                <button onClick={taskDone1}>Done</button>
            </div>
            <div className="task">
                <p style={isDone2?strike:null}>Buy Paneer</p>
                <button onClick={taskDone2}>Done</button>
            </div>
        </div>
    )
}

export default App;