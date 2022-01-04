import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValueValid: isFirstNameValid,
    valueChangeHandler: firstNameChangeHandler,
    valueInputBlur: firstNameInputBlur,
    resetForm: resetFirstNameField,
    hasError: firstNameHasError
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValueValid: isLastNameValid,
    valueChangeHandler: lastNameChangeHandler,
    valueInputBlur: lastNameInputBlur,
    resetForm: resetLastNameField,
    hasError: lastNameHasError
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValueValid: isEmailValid,
    valueChangeHandler: emailChangeHandler,
    valueInputBlur: emailInputBlur,
    resetForm: resetEmailField,
    hasError: emailHasError
  } = useInput((value) => value.includes("@"));

  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  const handleSubmit = (e) => {
    e.preventDefault();
    firstNameInputBlur();
    lastNameInputBlur();
    emailInputBlur();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
      return;
    }

    resetFirstNameField();
    resetLastNameField();
    resetEmailField();
  };

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlur}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlur}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailInputBlur}
        />

        {emailHasError && (
          <p className="error-text">Email must be valid containing '@'</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
