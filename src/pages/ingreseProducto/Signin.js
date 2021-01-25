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
    title: "Nombre",
    name: "fullname",

  },
  {
    title: "Descripcion",
    name: "descripcion",

  },
  {
    title: "Link de la imagen",
    name: "imagen",

  },
  {
    title: "Tallas",
    name: "tallas",
  },
  {
    title: "Precio",
    name: "precio",

  },
  {
    title: "Color",
    name: "color",

  },
  {
    title: "Cantidad",
    name: "cantidad",

  },
  {
    title: "Sexo",
    name: "sexo",

  },
  {
    title: "Categoria",
    name: "categoria",

  },  
]


export default function Signin({signin,signin_loading,signin_error}) {
  return (
    <div>
      <LoginSignin
      INPUT_CONFIG={INPUT_CONFIG}
      title="Registrar Producto"
      footer_text="Asegurese de ingresar de manera correcta los datos de su producto"
      footer_redirect="Iniciar Sesion"
      //submitAction={signin}
      //loading={signin_loading}
      //signin_error={signin_error}
      />
    </div>
  )
}



