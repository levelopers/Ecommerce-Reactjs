import React from 'react'
import styles from '../stylesheets/checkbox.module.sass'

export default function Checkbox({ onChange, name }) {
  return (
    <div className={styles.outbox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={name}>
        <div className={styles.checkbox} ></div>
        {name}
      </label>
    </div>
  )
}
