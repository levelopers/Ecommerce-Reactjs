import React, { Component } from 'react'
import Checkbox from './Checkbox'
import styles from '../stylesheets/filter.module.sass'
import generateFilterString from '../utils/generateFilterString'
import device, { size } from '../../../modules/mediaQuery'
import MediaQuery from 'react-responsive'
import Filter_md from './Filter_md'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.checkbox_ref = {}
  }
  handleChange = (e) => {
    const tagName = e.target.name
    const isChecked = e.target.checked
    this.setState(prevState => {
      if (isChecked) {
        return {
          [tagName]: isChecked
        }
      } else {
        delete prevState[tagName]
        return prevState
      }
    }, () => this.props.applyFilters(generateFilterString(this.state)))
    this.checkbox_ref[tagName] = e.target
  }
  handleCloseTag = (name) => {
    this.checkbox_ref[name].checked = false
    this.setState(prevState => {
      delete prevState[name]
      return prevState
    }, () => this.props.applyFilters(generateFilterString(this.state)))
  }
  render() {
    return (
      <div className={styles.outbox}>
        <MediaQuery query={device.min.tablet}>
          <div className={styles.box}>
            <div className={styles.title}>
              FILTERS
          <div className={styles.title_border}></div>
            </div>
            <div className={styles.content}>
              {/* order */}
              <div className={styles.block}>
                <div className={styles.sub_title}>
                  ORDER
              </div>
                <Checkbox
                  onChange={this.handleChange}
                  name="Ascending"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="Descending"
                />
              </div>
              {/* department */}
              <div className={styles.block}>
                <div className={styles.sub_title}>
                  DEPARTMENT
              </div>
                <Checkbox
                  onChange={this.handleChange}
                  name="Men"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="Women"
                />
              </div>
              {/* price */}
              <div className={styles.block}>
                <div className={styles.sub_title}>
                  PRICE
              </div>
                <Checkbox
                  onChange={this.handleChange}
                  name="Less Than $29"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="$29 - $39"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="$39 - $49"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="$49 - $89"
                />
                <Checkbox
                  onChange={this.handleChange}
                  name="Greater Than $89"
                />
              </div>
            </div>
            {/* filter tags */}
            <div className={styles.tags}>
              {Object.keys(this.state).map(n =>
                this.state[n] &&
                <div key={n} className={styles.tag}>
                  <div className={styles.tag_content}>
                    {n}
                  </div>
                  <div
                    className={styles.tag_close}
                    onClick={() => this.handleCloseTag(n)}
                  >
                    x
                </div>
                </div>
              )}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query={device.max.tablet}>
          <Filter_md 
          onChange={this.handleChange}
          closeTag={this.handleCloseTag}
          />
        </MediaQuery>
      </div>
    )
  }
}

