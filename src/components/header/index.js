import styles from './header.module.sass'
import React from 'react'
import DropList from './DropList'

let departments = ['Men', 'Women']
let categories={
  Men:['Knitwear','Jeans','Jackets'],
  Women:['Basics','Blazer']
}
export default function index() {
  return (
    <div className={styles.outbox}>
      <div className={styles.box}>
        <div className={styles.logo}>
          
        </div>
        <div className={styles.search}>
          <input type="text" className={styles.input} />
          <button className={styles.button}>
            <div className={styles.mockImg}></div>
          </button>
        </div>
        <div className={styles.list}>
          {departments.map(d =>
            <DropList
              key={d}
              department={d}
              categories={categories[d]}
            />
          )}

        </div>
      </div>
    </div>
  )
}

