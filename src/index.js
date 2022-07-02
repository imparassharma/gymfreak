import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import Time from "./time";

const rootElement = document.getElementById("root");
const Root = createRoot(rootElement);

Root.render(
    <div className="main">
      <App/>
      <Time/>
    </div>

)