import React, { useState } from 'react'

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false)
  const [isLastNameTouched, setIsLastNameTouched] = useState(false)
  const [isEmailTouched, setIsEmailTouched] = useState(false)

  const isFirstNameEmpty = firstName.trim() !== ''
  const isFirstNameValid = !isFirstNameEmpty && isFirstNameTouched

  const isLastNameEmpty = lastName.trim() !== ''
  const isLastNameValid = !isLastNameEmpty && isLastNameTouched

  const isEmailEmpty = email.trim() !== ''
  const isEmailValid = !isEmailEmpty && isEmailTouched

  let isReadyToSubmit = false
  if (isFirstNameEmpty && isLastNameEmpty  && isEmailEmpty){
    isReadyToSubmit = true
  }

  const firstNameChangeHandler = (event) =>{
    setFirstName(event.target.value)
  }
  const lastNameChangeHandler = (event) =>{
    setLastName(event.target.value)
  }
  const emailChangeHandler = (event) =>{
    setEmail(event.target.value)
  }

  const firstNameBlurHandler = (event) =>{
    setIsFirstNameTouched(true)
  }

  const lastNameBlurHandler = (event) => {
    setIsLastNameTouched(true)
  }
  
  const emailBlurHandler = (event) => {
    setIsEmailTouched(true)
  }

  const submitHandler = (e) =>{
    e.preventDefault()

    if (!isReadyToSubmit){
      return
    }

    if(!firstName){
      return
    }
    if(!lastName){
      return
    }
    if(!email){
      return
    }
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  const firstNameInputClasses = isFirstNameValid
  ? 'form-control invalid' 
  : 'form-control';

  const lastNameInputClasses = isLastNameValid
  ? 'form-control invalid' 
  : 'form-control';

  const emailInputClasses = isEmailValid
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
            {isFirstNameValid && <p className="error-text">First Name should be valid</p>}
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
            {isLastNameValid && <p className="error-text">Last Name should be valid</p>}
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
        {isEmailValid && <p className="error-text">Email should be valid</p>}
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
