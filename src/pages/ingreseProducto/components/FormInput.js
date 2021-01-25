import React from 'react'
import styles from '../stylesheets/formInput.module.sass'
import capitalizeString from '../utils/capitalizeString'

/*Construye los inputs*/
export default function FormInput({
  title,
  name,
  validations,
  errorMessage,
  onBlur,
  onFocus,
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.label}>
        <label htmlFor={title}>{capitalizeString(title)}</label>
      </div>
      
      <div className={styles.input}>
        <input
          /* tipo de texto que se ingresa*/
          type={'text'}
          name={name}
          /* texto que va en la parte interior del input como referencia */
          placeholder={name}
          /* Ejecuta una funcion cuando el usuario abandona el campo de entrada*/
          onBlur={(e) => onBlur(e, validate(validations, e.target.value))}
           /* Ejecuta una funcion cuando el usuario se enfoca en el campo de entrada*/
          onFocus={onFocus}
        />
      </div>
      <div className={styles.errMsg}>
        {errorMessage}
      </div>
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

