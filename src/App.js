import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Landing from "components/Landing";
import Contact from "components/Contact";

const App = () => (
  <>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Landing} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default withRouter(App);
