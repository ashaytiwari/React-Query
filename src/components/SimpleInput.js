import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    isValueValid: isNameValid,
    valueChangeHandler: nameChangeHandler,
    valueInputBlur: nameInputBlur,
    resetForm: resetNameField,
    hasError: nameHasError
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValueValid: isEmailValid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlur: emailInputBlur,
    resetForm: resetEmailField,
    hasError: emailHasError
  } = useInput((value) => value.includes("@"));

  const nameInputClass = nameHasError ? "form-control invalid" : "form-control";

  const emailInputClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  const formSubmitHandler = (e) => {
    e.preventDefault();
    nameInputBlur();
    emailInputBlur();

    if (!isNameValid || !isEmailValid) {
      return;
    }

    console.log(name, email);
    resetNameField();
    resetEmailField();
  };

  return (
    <form>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameInputBlur}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailInputBlur}
        />
        {emailHasError && (
          <p className="error-text">Email must be valid containing '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
