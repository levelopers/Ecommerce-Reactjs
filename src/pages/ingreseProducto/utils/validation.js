class Validation {
  constructor(assertion, rule, errMsg) {
    this.assertion = assertion
    this.rule = rule
    this.errMsg = errMsg
  }
  check(text) {
    return this.rule(text)
  }
  errMsg() {
    return this.errMsg
  }
}

export const validateExistence = new Validation(
  'input should have value',
  text => /\S/.test(text),
  'Llene el campo'
)
export const validateEmail = new Validation(
  'input should be an email',
  text => !!text.match(/[\w-]+@([\w-]+\.)+[\w-]+/i),
  'Correo Electronico'
)
export const validateLength = (min_len, max_len) => {
  const regex = new RegExp(`(?=.{${min_len},${max_len}})`, 'g')
  return new Validation(
    'input should within certain length',
    text => !!text.match(regex),
    `La contraseña debe tener entre ${min_len} y ${max_len} caracteres`
  )
}
export const validateLowerCase = new Validation(
  'input should have an uppercase',
  text => !!text.match(/(?=.*[A-Z])/g),
  'La contraseña debe tener al menos una mayuscula'
)
export const validateUpperCase = new Validation(
  'input should have lowercase',
  text => !!text.match(/(?=.*[a-z])/g),
  'La contraseña debe tener al menos una minuscula'
)