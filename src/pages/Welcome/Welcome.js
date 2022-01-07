import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h4>Welcome Page</h4>
      <Route path="/welcome/new-user">
        <p>Hello New user, Wanna be a member?</p>
      </Route>
    </div>
  );
};

export default Welcome;
