import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);

  const isNameValid = name.trim() !== "";
  const inputClassName =
    !isNameValid && isNameTouched ? "form-control invalid" : "form-control";

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameInputBlur = () => {
    setIsNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsNameTouched(true);

    if (!isNameValid) {
      return;
    }

    console.log(name);
    setName("");
    setIsNameTouched(false);
  };

  return (
    <form>
      <div className={inputClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameInputBlur}
        />
        {!isNameValid && isNameTouched && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
