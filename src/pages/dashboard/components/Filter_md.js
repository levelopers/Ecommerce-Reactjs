import React, { Component } from 'react'
import styles from '../stylesheets/filter_md.module.sass'
import Selection from './Selection'
import SubSelection from './SubSelection'

export default class Filter_md extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }
  clickShow = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }
  clickClear = () => {
    this.props.clear()
  }
  render() {
    const { onChange, clear, selected_name, configs } = this.props
    return (
      <div className={styles.outbox}>
        <div className={styles.panels}>
          <div
            className={`${styles.panel} ${styles.show_panel}`}
            onClick={this.clickShow}
          >
            {this.state.isShow
              ? <div>Close Filter </div>
              : <div>Show Filter</div>
            }
          </div>
          <div
            className={`${styles.panel} ${styles.close_panel}`}
            onClick={this.clickClear}
          >
            Clear Filter
         </div>
        </div>
        <div className={`${styles.content} ${this.state.isShow && styles.show_content}`}>
          {/* order */}
          <div className={styles.order_box}>
            <div className={styles.head_title}>
              <img src="" alt="" />
              <div className={styles.head_title_text}>
                ORDER
          </div>
            </div>
            <div className={styles.box}>
              {configs['order'].map(n => {
                n = n.toUpperCase()
                return (
                  <Selection
                    key={n}
                    title={n}
                    category='order'
                    selected={!!(selected_name['order'] && selected_name['order'].includes(n))}
                    onChange={onChange}
                  />
                )
              })}
            </div>
          </div>
          {/* filter */}
          <div className={styles.filter_box}>
            <div className={styles.head_title}>
              <img src="" alt="" />
              <div className={styles.head_title_text}>
                FILTER
            </div>
            </div>
            <div className={styles.box}>
              {/* department */}
              <div className={styles.selection}>
                <Selection
                  title='DEPARTMENT'
                  selected={selected_name['department'] && selected_name['department'].length > 0}
                  onChange={() => { }}
                />
                <div className={styles.sub_selection}>
                  <SubSelection
                    key='department'
                    category='department'
                    selected_arr={selected_name['department'] || []}
                    onClick={onChange}
                    content={configs['department'] || []}
                  />
                </div>
              </div>
              {/* price */}
              <div className={styles.selection}>
                <Selection
                  title='PRICE'
                  selected={selected_name['price'] && selected_name['price'].length > 0}
                  onChange={() => { }}
                />
                <div className={styles.sub_selection}>
                  <SubSelection
                    key='price'
                    category='price'
                    selected_arr={selected_name['price'] || []}
                    onClick={onChange}
                    content={configs['price'] || []}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

