import React from 'react'
import styles from '../stylesheets/menu.module.sass'
import DropList from './DropList'
import jumpTo from '../../../modules/Navigation'
export default function Menu({
  departments,
  getProductsByCategory,
  getAllProducts
}) {
  return (
    <div className={styles.outbox}>
      {/* lists */}
      <div className={`${styles.lists}`}>
        {/* departments */}
        {departments && departments.map(d =>
          <div className={styles.tag}
            key={d.departmentName}
          >
            <DropList
              clickCategory={(c) => getProductsByCategory(c)}
              department={d.departmentName}
              categories={d.categories.split(',')}
            />
          </div>
        )}
      </div>
      {/* all product */}
      <div className={styles.tag}
        onClick={() => {
          getAllProducts()
          jumpTo('/dashboard')
        }}
      >
        All Product
      </div>
    </div>
  )
}
