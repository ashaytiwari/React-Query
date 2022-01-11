import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  return (
    <Route path={props.path} exact={props.exact}>
      {props.isAuthenticated ? props.children : <Redirect to={"/"} />}
    </Route>
  );
};

export const PublicRoute = (props) => {
  return (
    <Route path={props.path} exact={props.exact}>
      {!props.isAuthenticated ? props.children : <Redirect to={"/"} />}
    </Route>
  );
};

export default PrivateRoute;
