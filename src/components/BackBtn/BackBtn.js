import classes from "./BackBtn.module.css";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

const BackButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiSliceActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>Back</span>
    </button>
  );
};

export default BackButton;
