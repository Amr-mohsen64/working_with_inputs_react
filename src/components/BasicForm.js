import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes("@");

const BasicForm = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBLurHandler,
    reset: restFirstName
  } = useInput(isNotEmpty)

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBLurHandler,
    reset: restLastName
  } = useInput(isNotEmpty)

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBLurHandler,
    reset: restEmail
  } = useInput(isEmail)

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log(firstNameValue, lastNameValue, emailValue);
    restFirstName()
    restLastName()
    restEmail()
  }

  const firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control"
  const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control"
  const emailClasses = emailHasError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='firstName'
            id='firstName'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBLurHandler}
          />
          {firstNameHasError && <p className="error-text">please enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            id='lastName'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBLurHandler} />
          {lastNameHasError && <p className="error-text">please enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          id='email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBLurHandler}
        />
        {emailHasError && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
