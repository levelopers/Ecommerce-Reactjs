import React from 'react'
import Checkbox from './Checkbox'
import styles from '../stylesheets/filter_md.module.sass'

export default function Filter_md({
  onChange,
  closeTag,
}) {
  return (
    <div className={styles.outbox}>
    <div className={styles.box}>
     <div className={styles.order}>
      
     </div>
     <div className={styles.filter}>
      
     </div>
    </div>
      <select className={styles.select} name="sort" id="sort">
        <option value="featured">Featured Items</option>
        <option value="newest">Newest Items</option>
        <option value="bestselling" selected="">Best Selling</option>
        <option value="alphaasc">A to Z</option>
        <option value="alphadesc">Z to A</option>
        <option value="avgcustomerreview">By Review</option>
        <option value="priceasc">Price: Ascending</option>
        <option value="pricedesc">Price: Descending</option>
      </select>
    </div>
  )
}
