import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameToched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameInputInvalid = !nameIsValid && nameToched;

  const inpChangeHandler = (e) => {
    setName(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setNameTouched(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    if (!nameIsValid) {
      return;
    }

    setName("");
    setNameTouched(false);
  };

  const nameInputClasses = nameInputInvalid
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

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
