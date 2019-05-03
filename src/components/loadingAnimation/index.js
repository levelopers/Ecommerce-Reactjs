import React from 'react'
import loading_animation from '../../assets/images/loading-bars.svg'
import styles from './loading.module.sass'
export default function index() {
  return (
    <div className={styles.loading_background} >
      <img src={loading_animation} className={styles.svg} alt="" />
    </div>
  )
}
