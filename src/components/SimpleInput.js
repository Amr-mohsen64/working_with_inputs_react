import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault()

    // setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      setEnteredNameTouched(true)
      return
    }
    setEnteredNameIsValid(true)
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    //empty inputs
    // nameInputRef.current.value = "" // NOT IDEAL , DON'T MANUPLATE THE DOM LEAVE IT TO REACT
    setEnteredName("")
  }

  const nameInputIsInvaild = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvaild
    ? "form-control invalid"
    : "form-control"

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {nameInputIsInvaild
          && <p className="error-text"> not valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
