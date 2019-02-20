import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Landing from "components/Landing/Landing";
import Contact from "components/Contact/Contact";
import "./App.css";

// font-awesome boilerplate
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faPhone, faDesktop } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faPhone, faDesktop);

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Landing} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default withRouter(App);
