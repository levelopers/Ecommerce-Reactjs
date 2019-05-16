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
    name: "fullname",
    // validations: [validateLength()]
  },
  {
    name: "email",
    validations: [validateExistence, validateEmail]
  },
  {
    name: "password",
    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
  },
  {
    name: "verifyPassword",
    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
  },
]


export default function Signin({signin,signin_loading,signin_error}) {
  return (
    <div>
      <LoginSignin
      INPUT_CONFIG={INPUT_CONFIG}
      title="Signin"
      footer_text="Do you have an account?"
      footer_redirect="login"
      submitAction={signin}
      loading={signin_loading}
      signin_error={signin_error}
      />
    </div>
  )
}



