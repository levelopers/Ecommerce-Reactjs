import React, { Component } from 'react'
import styles from './auto.module.sass'
export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      val: ''
    }
  }
  handleChange = (e) => {
    const input = e.target.value
    this.props.filter(input)
    if(this.props.onChange){
      this.props.onChange(input)
    }
    this.setState({
      val: input
    })
  }
  handleFocus = () => {
    this.setState({
      isFocus: true
    })
  }
  handleBlur = () => {
    let blurTimer=null
    blurTimer=setTimeout(() => {
      this.setState({
        isFocus: false
      },()=>clearTimeout(blurTimer))
    }, 100);
  }
  handleClick = (v) => {
    if(this.props.suggest_value){
      this.props.suggest_value(v)
    }
    this.setState({
      val: v
    })
  }
  render() {
    const r = this.props.filter_result
    return (
      <div className={styles.outbox} style={this.props.style}>
        <input
          type="text"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.val}
          placeholder="Search"
        />
        <div className={styles.sugges_outbox}>
          {
            this.state.isFocus &&
            !this.props.error && !this.props.loading &&
            Object.keys(r || {}).map(f =>
              <div key={f} className={styles.sugges_box}>
                <div className={styles.sugges_category}>
                  {f}
                </div>
                <div className={styles.sugges_arr}>
                  {r[f].map(s =>
                    <div
                      key={s}
                      className={styles.sugges_value}
                      onClick={() => this.handleClick(s)}
                    >
                      {s}
                    </div>
                  )}
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
