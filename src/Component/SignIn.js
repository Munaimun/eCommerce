import React from 'react'
import { signInWithGogglePopup, createUserDocumentFromAuth } from '../utils/firebase/FirebaseUtils'
import SignUpForm from './SignUpForm';

const SignIn = () => {

  const logGoogleUser = async ()=> {
    const {user} = await signInWithGogglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      SignIn Form
      <button onClick={logGoogleUser}>Sing-In with GooglePopup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn