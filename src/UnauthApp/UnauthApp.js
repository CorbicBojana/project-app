import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";

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
          <Route path="/Sing-in" component={SingIn} />
          <Route path="/Sing-up" component={SingUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default UnauthApp;
