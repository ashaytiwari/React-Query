import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.activeClass} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeClass} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
