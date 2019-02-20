import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "App";

const app = (
  <Router basename="/AI__BLOCKCHAIN__ML-website">
    <App />
  </Router>
);

ReactDOM.render(app, document.querySelector("#root"));
