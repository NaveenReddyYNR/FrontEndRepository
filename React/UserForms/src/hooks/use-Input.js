import { useState } from "react";

const useInput = (validateInputValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueToched, setInputValueTouched] = useState(false);

  const valueIsValid = validateInputValue(inputValue);
  const valueIsInvalid = !valueIsValid && inputValueToched;

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputValueTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputValueTouched(false);
  };

  const inputValueClasses = valueIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return {
    inputValue,
    setInputValueTouched,
    valueIsValid,
    valueIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    inputValueClasses,
    reset,
  };
};
export default useInput;
