import React from 'react'
import styles from '../stylesheets/checkbox.module.sass'

export default function Checkbox({ onChange, name, category, isChecked }) {
  return (
    <div className={styles.outbox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={(e) => onChange(e, category)}
        checked={isChecked}
      />
      <label htmlFor={name}>
        <div className={styles.checkbox} ></div>
        {name}
      </label>
    </div>
  )
}
