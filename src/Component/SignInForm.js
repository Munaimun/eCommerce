import React, { useState } from "react";

import {
  signInWithGogglePopup,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/FirebaseUtils";

import FormInput from "./formInput/formInput";
import "./SignInForm.scss";
import Button from "./button/ButtonComponent";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGogglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      )
      console.log(response)
      resetFormFields();
    } catch (error) {
      switch (error.code){
        case 'auth/wrong-password':
          alert('incorrect password!')
          break;
        case 'auth/weak-password':
          alert('weak password')
          break;
        case 'auth/user-not-found':
          alert("no user with this email")
          break;
        default:
          console.log(error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign-In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          &nbsp;
          <Button type='button' buttontype="google" onClick={SignInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
