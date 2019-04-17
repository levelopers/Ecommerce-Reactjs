import React from 'react'
import styles from '../stylesheets/formInput.module.sass'


export default function FormInput({
  name,
  validations,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <div className={styles.outbox}>
      <input
        type="text"
        name={name}
        placeholder={name}
        onBlur={(e) => onBlur(e, validate(validations, e.target.value))}
      />
      {errorMessage}
    </div>
  )
}

const validate = (validations, val) => {
  if (validations) {
    for (const validation of validations) {
      if (!validation.check(val)) {
        return {
          isValid: false,
          errorMsg: validation.errMsg
        }
      }
    }
  }
  return { isValid: true }
}

