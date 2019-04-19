import React, { Component } from 'react'
import styles from './stylesheets/loginsignin.module.sass'
import Base from './components/Base'
import capitalizeString from './utils/capitalizeString'

export default class LoginSignin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.inputText={}
    for (const input of props.INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
      this.inputText[input.name]=''
    }
  }
  handleBlur = (e, validResult) => {
    const name = e.target.name
    this.inputText[name]=e.target.value
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
  handleFocus = (e) => {
    const name = e.target.name
    // when focus, clear error message
    this.setState({
      [name]: { errorMsg: '' }
    })
  }
  handleClick = () => {
    if(this.props.title==='Login'){
      const {email,password}=this.inputText
    this.props.submitAction(email,password)
    }
    if(this.props.title==='Signin'){
      const {fullname,email,password,verifyPassword} = this.inputText
      this.props.submitAction(fullname,email,password,verifyPassword)
    }
  }
  render() {
    console.log(this.state);
    console.log(this.inputText);
    
    return (
      <div className={styles.outbox}>
        <div className={styles.box}>
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
