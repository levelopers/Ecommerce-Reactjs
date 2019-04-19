import React, { Component } from 'react'
import styles from './dropList.module.sass'

export default class DropList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropped: false
    }
  }

  handleClick = () => {
    this.setState(state => ({ isDropped: !state.isDropped }))
  }

  render() {
    console.log(this.state);

    return (
      <div className={styles.outbox}>
        <div className={styles.department} onClick={this.handleClick}>
          {this.props.department}
        </div>
        {
          this.state.isDropped &&
          <div className={styles.categories_box}>
            {
              this.props.categories &&
              this.props.categories.map(c => (
                <div key={c} className={styles.categories}>
                  {c}
                </div>
              ))
            }
          </div>
        }
      </div>
    )
  }
}

