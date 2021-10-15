import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Overlay from "../../UI/Overlay/Overlay";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    let array = [...props.userList];
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)"
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid (> 0)"
      });
      return;
    }
    let object = {
      name: userName,
      age: age
    };
    array.push(object);
    props.onAddUser(array);
    setUserName("");
    setAge("");
  };

  const onNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Overlay
          title={error?.title}
          message={error?.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={onNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
