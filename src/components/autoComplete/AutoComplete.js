import React, { Component } from 'react'
import styles from './auto.module.sass'
export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: true,
      val: ''
    }
  }
  handleChange = (e) => {
    const input = e.target.value
    this.props.filter(input)
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
    this.setState({
      isFocus: false
    })
  }
  handleClick = (v) => {
    this.setState({
      val: v
    })
  }
  render() {
    const r = this.props.filter_result
    return (
      <div className={styles.outbox}>
        <input
          type="text"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.val}
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
