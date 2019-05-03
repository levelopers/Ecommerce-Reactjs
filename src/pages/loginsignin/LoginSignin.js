import React, { Component } from 'react'
import styles from './stylesheets/loginsignin.module.sass'
import Base from './components/Base'
import capitalizeString from './utils/capitalizeString'
import jumpTo from '../../modules/Navigation'
import LoadingAnimation from '../../components/loadingAnimation'


export default class LoginSignin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.inputText = {}
    for (const input of props.INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
      this.inputText[input.name] = ''
    }
  }
  //validate input when blur
  handleBlur = (e, validResult) => {
    const name = e.target.name
    this.inputText[name] = e.target.value
    if (!validResult.isValid) {
      this.setState({
        [name]: { errorMsg: validResult.errorMsg }
      })
    } else {
      this.setState({
        [name]: { errorMsg: '' }
      })
    }
  }
  // when focus, clear error message
  handleFocus = (e) => {
    const name = e.target.name
    this.setState({
      [name]: { errorMsg: '' }
    })
  }
  //submit actions
  handleClick = () => {
    //validate all input 
    let canSubmit = true
    for (const input of this.props.INPUT_CONFIG) {
      if (!!!input.validations) continue
      for (const v of input.validations) {
        let checkResult = v.check(this.inputText[input.name])
        canSubmit = canSubmit && checkResult
        if (!checkResult) {
          this.setState({
            [input.name]: { errorMsg: v.errMsg }
          })
          break
        }
      }
    }
    if (!canSubmit) {
      console.log('valid fail');
      return
    }
    if (this.props.title === 'Login') {
      const { email, password } = this.inputText
      this.props.submitAction(email, password)
        .then(res => {
          jumpTo('/dashboard')
        })
    }
    if (this.props.title === 'Signin') {
      const { fullname, email, password, verifyPassword } = this.inputText
      this.props.submitAction(fullname, email, password, verifyPassword)
        .then(res => {
          jumpTo('/login')
        })
        .catch(err => {
          jumpTo('/signin')
          throw err
        })
    }
  }
  render() {
    return (
      <div className={styles.outbox}>
        <div className={styles.box}>
          {this.props.loading &&
            <LoadingAnimation/>
          }
          <Base
            title={this.props.title}
            inputs={this.props.INPUT_CONFIG}
            onInputBlur={this.handleBlur}
            onInputFocus={this.handleFocus}
            onSubmit={this.handleClick}
            errorMsg={this.state}
            button_title={this.props.title}
            footer_content={
              <div>
                {this.props.footer_text} <a href={`/${this.props.footer_redirect}`}>
                  {capitalizeString(this.props.footer_redirect)}
                </a>
              </div>
            }
          />
        </div>
      </div>
    )
  }
}
