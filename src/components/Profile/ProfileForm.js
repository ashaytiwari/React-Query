import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDL3Zi8qGWoBRfHAQRQLe1vvMOAnyT6atM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password,
          returnSecureToken: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((res) => {
      if (res.ok) {
        alert("Password Reset SUCCESSFULLY");
        setIsLoading(false);
        setPassword("");
        history.replace("/");
      } else {
        setIsLoading(false);
        alert("Something Went Wrong!");
      }
    });
  };

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
