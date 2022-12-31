import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched


  const nameInputChangeHandler = event  => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  };

  const formSubmissionHandler = event => {
    event.preventDefault(); // to prevent the HTTP request when 

    setEnteredNameTouched(true);

    if (!enteredNameIsValid){
      return;
    }

    // use useState when:
    // 1) You want to check on each keystroke use state
    // 2) You want to reset the value
    console.log(enteredName) 
    //2) reseting
    setEnteredName('')
    setEnteredNameTouched(false)
  };
  
  const nameInputClasses = nameInputIsValid 
  ? 'form-control invalid' 
  : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler} // fires whenever this input looses focus
          value={enteredName}
          />
      </div>
      {nameInputIsValid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


{/*
// Sample Code with useRef
import { useEffect, useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = event => {
    event.preventDefault(); // to prevent the HTTP request when 
    // if you only want the value once when submitted, use (useRef)
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
    //nameInputRef.current.value = '';// we are directly manipulating the DOM
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
*/}