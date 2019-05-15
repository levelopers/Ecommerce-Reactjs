import React from 'react'
import styles from '../stylesheets/sub_selection.module.sass'

export default function SubSelection({ selected_arr, onClick, content, category }) {
  return (
    <div className={`${styles.outbox}`}>
      <div className={styles.box}>
        {content.map(c => {
          c = c.toUpperCase()
          return (
            <div
              key={c}
              className={`${styles.content} ${selected_arr.includes(c) && styles.selected}`}
              onClick={(e) => onClick(e, category, c)}>
              {c}
            </div>
          )
        })}
      </div>
    </div>
  )
}
