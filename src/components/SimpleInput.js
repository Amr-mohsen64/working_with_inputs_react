import { useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [formIsvalid, setFormIsvalid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvaild = !enteredNameIsValid && enteredNameTouched

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  //instead of useEffect
  let formIsvalid = false
  if (enteredNameIsValid) {
    formIsvalid = true
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsvalid(true)
  //   } else {
  //     setFormIsvalid(false)
  //   }
  // }, [enteredNameIsValid])

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName);
    setEnteredName("")
    setEnteredNameTouched(false)
  }


  const nameInputClasses = nameInputIsInvaild
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
        {nameInputIsInvaild
          && <p className="error-text"> not valid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
