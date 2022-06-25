import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameToched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [mailTouched, setMailTouched] = useState(false);

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && mailTouched;

  const nameIsValid = name.trim() !== "";
  const nameInputInvalid = !nameIsValid && nameToched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const inpChangeHandler = (e) => {
    setName(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setNameTouched(true);
  };
  const mailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const mailBlurHandler = (e) => {
    setMailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setMailTouched(true);
    if (!nameIsValid && !emailIsValid) {
      return;
    }
    console.log(name, email);
    setName("");
    setEmail("");
    setNameTouched(false);
    setMailTouched(false);
  };

  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          type="text"
          id="name"
          autoComplete="off"
          onChange={inpChangeHandler}
          onBlur={inputBlurHandler}
        />
        {nameInputInvalid && <p className="error-text">Name is not Valid</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          id="email"
          autoComplete="off"
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
        />
        {emailIsInvalid && <p className="error-text">Enter Valid Email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
