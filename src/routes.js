import React from "react";
import App from "./App";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login1 from "./templates/auth/Login";
import Home from "./templates/home/Home";
import SignUp from "./templates/auth/SignUp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login1} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  );
};
