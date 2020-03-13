import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function UnauthApp() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <NavBar />
                <Intro />
              </>
            )}
          />
          <Route path="/Sign-in" component={SignIn} />
          <Route path="/Sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default UnauthApp;
