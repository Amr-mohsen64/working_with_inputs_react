import {  useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    InputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');


  //instead of useEffect
  let formIsvalid = false
  if (enteredNameIsValid) {
    formIsvalid = true
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault()

    // setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName);
    resetNameInput()
  }


  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control"

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError
          && <p className="error-text"> not valid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
