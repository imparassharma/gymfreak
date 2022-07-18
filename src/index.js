import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import Time from "./cal";
import TaskList from "./todo";

const rootElement = document.getElementById("root");
const Root = createRoot(rootElement);

Root.render(
    <div className="main">
      <h1>Gym<span>Freak</span></h1>
      <div className="main-container">
        <TaskList/>
        <App/>
        <Time/>
      </div>
    </div>

)