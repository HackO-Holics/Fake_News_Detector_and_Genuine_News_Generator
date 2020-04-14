import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";
import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Redirect from='*' to='/'/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
