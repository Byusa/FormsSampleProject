// check:
// 1) Formik
// 2) https://academind.com/tutorials/reactjs-a-custom-useform-hook
import React from 'react'
import useInput from '../hooks/user-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstName, 
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError, 
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty)

  const {
    value: lastName, 
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError, 
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty )

  const {
    value: email, 
    isValid: emailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail )

  let isReadyToSubmit = false
  if (firstNameIsValid && lastNameIsValid  && emailIsValid){
    isReadyToSubmit = true
  }

  const submitHandler = (e) =>{
    e.preventDefault()

    if (!isReadyToSubmit){
      return
    }
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClasses = firstNameInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  const emailInputClasses = emailInputHasError
  ? 'form-control invalid' 
  : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='firstName' 
            onChange={firstNameChangeHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
            />
            {firstNameInputHasError && <p className="error-text">First Name should be valid</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lastName' 
            onChange={lastNameChangeHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
            />
            {lastNameInputHasError && <p className="error-text">Last Name should be valid</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailBlurHandler}
          />
        {emailInputHasError && <p className="error-text">Email should be valid</p>}
      </div>
      <div className='form-actions'>
        <button 
          disabled={!isReadyToSubmit}
        >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
