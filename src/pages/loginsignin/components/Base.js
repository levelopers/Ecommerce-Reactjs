import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'

export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.logo}>Zack Market</div>
      <div className={styles.title_style}>{title}</div>
      <div className={styles.border_style}></div>
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
      <Button button_title={button_title} onClick={onSubmit} />
      <Footer content={footer_content} />
    </div>
  )
}


