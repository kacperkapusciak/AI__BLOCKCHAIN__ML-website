import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "App";

const app = (
  <Router basename="/ai__blockchain__ml">
    <App />
  </Router>
);

ReactDOM.render(app, document.querySelector("#root"));
