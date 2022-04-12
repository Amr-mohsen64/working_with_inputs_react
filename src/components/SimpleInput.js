import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault()

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    //empty inputs
    // nameInputRef.current.value = "" // NOT IDEAL , DON'T MANUPLATE THE DOM LEAVE IT TO REACT
    setEnteredName("")
  }


  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {!enteredNameIsValid && <p className="error-text"> not valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
