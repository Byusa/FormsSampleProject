# FormsSampleProject

## Working with Forms & User Input

1. Module intro
    1. What’s complex about forms
    2. Handling inputs & Forms with React
    3. Simplifications
2. Our Starting Projects
3. What’s so complex about forms?
    1. Forms and input can assume different states
        1. One or more inputs are invalid
            1. Output input specific error, massages & highlight problematic inputs
            2. Ensure form can’t be submitted/saved
        2. All inputs are valid
            1. All form to be submitted/saved
    2. When to validate
        1. When form is submitted 
            1. Allow the user to enter valid value before warning him/her
            2. Avoid unnecessary warning but maybe present feedback “too late”
        2. When an input is losing focus
            1. Allow the user to enter valid value before warning him/her
            2. Very useful for untouched forms
        3. On every keystroke
            1. Warns user before he/she has a chance of entering valid values
4. Dealing with Form submission & Getting user input values
    1. useRef
        1. import { useRef } from 'react'
        2. const nameInputRef = useRef()
        3. const formSubmissionHandle = event() => {         event.preventDefault();        const enteredVal=nameInputRef.current.value         console.log(enteredVal)}
        4. <input      ref={nameInputRef}     type=“text”     id=“someId”/>
    2. useState
        1. import { useState } from 'react'
        2. const [enteredName, setEnteredName] = useState('');
        3. const formSubmissionHandle = event() => {       event.preventDefault();     if(enteredName.trim() === ‘’){ return; }      console.log(enteredVal)      setEnteredName('')}
        4. const nameInputChangeHandler = event  => {      setEnteredName(event.target.value)};
        5. <input      type=“text”     id=“someId”     onChange={nameInputChangeHandler}     value={enteredName}/>
5. Adding basic validation
    1. Inside the formSubmissionHandle{ if(enteredName.trim() === ‘’){ return; }}
6. Providing Validation Feedback
    1. const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
    2. In formSubmissionHandleif(enteredName.trim() === ''){     setEnteredNameIsValid(false)     return;}
    3. Below the <input …./>{!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
7. Handling the “Was touched” State
    1. Add another state variable   const [enteredNameTouched, setEnteredNameTouched] = useState(false)
8. React To Lost Focus 
    1. <input onBlur={nameInputBlurHandler}/>
    2. const nameInputBlurHandler = event => {     setEnteredNameTouched(true)};
9. Managing the overall form Validity 
    1. 
10. Adding A custom input hook
    1. Create hooks folder in src
    2. Add hook
        1. User-input.js
    3. 

