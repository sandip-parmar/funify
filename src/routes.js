import React from "react";
import App from "./App";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login1 from "./templates/auth/Login";
import Home from "./templates/home/Home";
import SignUp from "./templates/auth/SignUp";
import Settings from "./templates/settings/Settings";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" render = { () => ( <Redirect to={"/home"} />)} />
        <Route path="/home" component={Home} />
        <Route exact path="/login" component={Login1} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Login1} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  );
};
