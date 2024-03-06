import React, { useState } from 'react'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmpassword} = formFields;

    // console.log(formFields);

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

  return (
    <div>
        <h1>Sign-Up with your email and password</h1>

        <form onSubmit={() => {}}>
            <label>Name</label>
            <input type='text' required onChange={changeHandler} name='displayName' value={name}/>

            <label>Email</label>
            <input type='email' required onChange={changeHandler} name='email' value={email}/>

            <label>Password</label>
            <input type='password' required onChange={changeHandler} name='password' value={password}/>

            <label>Confirm Password</label>
            <input type='password' required onChange={changeHandler} name='confirmpassword' value={confirmpassword}/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm