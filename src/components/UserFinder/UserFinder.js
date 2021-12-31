import { Component } from "react";

import Users from "../Users/Users";
import styles from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" }
];

class UserFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredUsers: [...DUMMY_USERS],
      searchTerm: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      });
    }
  }

  searchChangeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <div className={styles.finder}>
        <input
          type="search"
          value={this.state.searchTerm}
          onChange={this.searchChangeHandler}
        />
        <Users users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default UserFinder;
