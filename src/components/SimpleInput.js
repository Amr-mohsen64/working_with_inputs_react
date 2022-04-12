
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName, //aliase
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    InputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    InputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@") );


  let formIsvalid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsvalid = true
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }

    console.log(enteredName);
    resetNameInput()
    resetEmailInput()
  }


  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control"

  const emailInputClasses = emailInputHasError
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
        {nameInputHasError && <p className="error-text"> not valid name</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='nemailame'>Your email</label>
        <input type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text"> not valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
