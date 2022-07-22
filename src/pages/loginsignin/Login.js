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
    title: "Correo Electronico", 
    name: "email",
    validations: [validateExistence, validateEmail]
  },
  {
    title: "Contraseña",
    name: "password",
    validations: [validateExistence, validateLength(6, 15), validateLowerCase, validateUpperCase]
  }
]

export default function Login({ postToken, login_loading, login_error }) {
  return (
    <div>
      <LoginSignin
        INPUT_CONFIG={INPUT_CONFIG}
        title="Iniciar Sesion"
        footer_text="¿Aun no tienes una cuenta?"
        footer_redirect="signin"
        submitAction={postToken}
        loading={login_loading}
        login_error={login_error}
      />
    </div>
  )
}





