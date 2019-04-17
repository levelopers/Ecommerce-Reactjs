import React, { Component } from 'react'
import styles from './stylesheets/loginsignin.module.sass'
import Base from './components/Base'
import capitalizeString from './utils/capitalizeString'

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    for (const input of props.INPUT_CONFIG) {
      this.state[input.name] = { errorMsg: '' }
    }
  }
  handleBlur = (e, validResult) => {
    const name = e.target.name
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

  }
  render() {
    console.log(this.state);

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
            button_title="Signin"
            footer_content={<div>{this.props.footer_text} <a href={`/${this.props.footer_redirect}`}>{capitalizeString(this.props.footer_redirect)}</a></div>}
          />
        </div>
      </div>
    )
  }
}
