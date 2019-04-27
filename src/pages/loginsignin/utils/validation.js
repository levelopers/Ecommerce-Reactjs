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
  'Required'
)
export const validateEmail = new Validation(
  'input should be an email',
  text => !!text.match(/[\w-]+@([\w-]+\.)+[\w-]+/i),
  'invalid email'
)
export const validateLength = (min_len, max_len) => {
  const regex = new RegExp(`(?=.{${min_len},${max_len}})`, 'g')
  return new Validation(
    'input should within certain length',
    text => !!text.match(regex),
    `password has to be ${min_len}-${max_len} letter`
  )
}
export const validateLowerCase = new Validation(
  'input should have an uppercase',
  text => !!text.match(/(?=.*[A-Z])/g),
  'at least one upper case'
)
export const validateUpperCase = new Validation(
  'input should have lowercase',
  text => !!text.match(/(?=.*[a-z])/g),
  'at least one lower case'
)