import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";
import BackButton from "../BackBtn/BackBtn";

const MainHeader = (props) => {
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>

      <nav>
        <ul>
          {!isCartVisible && (
            <li>
              <CartButton />
            </li>
          )}
          {isCartVisible && (
            <li>
              <BackButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
