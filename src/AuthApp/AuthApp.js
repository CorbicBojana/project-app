import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Categories from "./Categories/Categories";

function AuthApp() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/Categories" component={Categories} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AuthApp;
