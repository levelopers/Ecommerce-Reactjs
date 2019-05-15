import React from 'react'
import styles from '../stylesheets/selection.module.sass'
export default function Selection({ title, selected,category, onChange }) {
  return (
    <div
      className={`${styles.sub_title} ${selected && styles.selected}`}
      onClick={(e) => onChange(e,category, title)}
    >
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}
