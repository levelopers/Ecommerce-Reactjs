import React, { Component } from 'react'
import styles from './stylesheets/signin.module.sass'
import Base from './components/Base'
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
    validations: [validateExistence, validateLength(6,15), validateLowerCase, validateUpperCase]
  },
  {
    name: "verifyPassword",
    validations: [validateExistence, validateLength(6,15), validateLowerCase, validateUpperCase]
  },
]

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    for (const input of INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
    }
  }
  handleBlur = (e, validResult) => {
    const name = e.target.name
    if (!validResult.isValid) {
      this.setState({
        [name]: { errorMsg: validResult.errorMsg }
      })
    }else{
      this.setState({
        [name]: { errorMsg: '' }
      })
    }
  }
  handleFocus = () => {

  }
  handleClick = () => {

  }
  render() {
    return (
      <div className={styles.outbox}>
        <Base
          inputs={INPUT_CONFIG}
          onInputBlur={this.handleBlur}
          onInputFocus={this.handleFocus}
          onSubmit={this.handleClick}
          errorMsg={this.state}
        />
      </div>
    )
  }
}
