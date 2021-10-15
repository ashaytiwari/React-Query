import "./App.css";
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  return (
    <>
      <AddUser userList={userList} onAddUser={setUserList} />
      <UserList users={userList} />
    </>
  );
}

export default App;
