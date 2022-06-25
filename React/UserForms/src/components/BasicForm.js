import useInput from "../hooks/useInputReducer";

const BasicForm = (props) => {
  const {
    inputValue: firstName,
    valueIsInvalid: firstNameIsInvalid,
    setInputValueTouched: setFirstNameTouched,
    valueIsValid: firstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputValueClasses: firstNameClasses,
    reset: resetFirstName,
  } = useInput((firstName) => firstName.trim() !== "");
  const {
    inputValue: lastName,
    valueIsValid: lastNameIsValid,
    setInputValueTouched: setLastNameTouched,
    valueIsInvalid: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputValueClasses: lastNameClasses,
    reset: resetLastName,
  } = useInput((lastName) => lastName.trim() !== "");
  const {
    inputValue: email,
    valueIsValid: emailIsValid,
    setInputValueTouched: setEmailNameTouched,
    valueIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputValueClasses: emailClasses,
    reset: resetEmail,
  } = useInput((email) => email.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = "true";
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEmailNameTouched(true);
    setFirstNameTouched(true);
    setLastNameTouched(true);
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }
    console.log(firstName, lastName, email);
    resetEmail();
    resetFirstName();
    resetLastName();
    setEmailNameTouched(false);
    setFirstNameTouched(false);
    setLastNameTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">Enter your first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Enter your last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && <p className="error-text">Enter your valid mail.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
