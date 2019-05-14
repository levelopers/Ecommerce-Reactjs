import React from 'react'
import styles from '../stylesheets/filter_md.module.sass'

export default function Filter_md({
  onChange,
  closeTag,
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.order_box}>
        <div className={styles.head_title}>
          <img src="" alt="" />
          <div className={styles.head_title_text}>
            ORDER
        </div>
        </div>
        <div className={styles.box}>
          <div className={styles.sub_title}>
            <div className={styles.title}>
              Ascending
          </div>
          </div>
          <div className={styles.sub_title}>
            <div className={styles.title}>
              Descending
          </div>
          </div>
        </div>
      </div>
      <div className={styles.filter_box}>
        <div className={styles.head_title}>
          <img src="" alt="" />
          <div className={styles.head_title_text}>
            FILTER
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.sub_title}>
            <div className={styles.title}>
              DEPARTMENT
          </div>
          </div>
          <div className={styles.sub_title}>
            <div className={styles.title}>
              CATEGORY
          </div>
          </div>
          <div className={styles.sub_title}>
            <div className={styles.title}>
              PRICE
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
