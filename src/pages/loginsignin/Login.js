import React, { Component } from 'react'
import LoginSignin from './LoginSignin'
import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'


const INPUT_CONFIG = [
  {
    name: "email",
    validations: [validateExistence, validateEmail]
  },
  {
    name: "password",
    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
  }
]

export default function Signin() {
  return (
    <div>
      <LoginSignin
      INPUT_CONFIG={INPUT_CONFIG}
      title="Login"
      footer_text="Don't you have an account?"
      footer_redirect="signin"
      />
    </div>
  )
}



