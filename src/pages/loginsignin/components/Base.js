import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'

export default function Base({
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  errorMsg
}) {
  return (
    <div className={styles.outbox}>
      {
        inputs.map(({ name, validations }) => 
          <FormInput
            key={name}
            name={name}
            validations={validations}
            errorMessage={errorMsg[name].errorMsg}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
          />
        )
      }
    </div>
  )
}

