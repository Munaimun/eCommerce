import React from 'react'
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './Authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication