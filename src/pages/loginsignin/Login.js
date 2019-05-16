import React from 'react'
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

export default function Login({ postToken, login_loading, login_error }) {
  return (
    <div>
      <LoginSignin
        INPUT_CONFIG={INPUT_CONFIG}
        title="Login"
        footer_text="Don't you have an account?"
        footer_redirect="signin"
        submitAction={postToken}
        loading={login_loading}
        login_error={login_error}
      />
    </div>
  )
}





