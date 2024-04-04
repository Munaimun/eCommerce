import React from 'react'
import './Button.scss'

const ButtonTypeClasses = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({ children, buttontype, ...otherProps }) => {
  return (
    <button className={`button-container ${ButtonTypeClasses[buttontype]}`} {...otherProps}>{children}</button>
  )
}

export default Button