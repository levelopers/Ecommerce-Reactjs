import { Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
import styles from '../stylesheets/sizes.module.sass'
export default function Sizes({ sizes, selectedSize, clickSize }) {
  return (
    <div>
      <DropdownButton className={styles.btn} title={selectedSize || sizes[0]}>
        {sizes.slice(1).length > 0
          ? sizes.slice(1).map(s =>
            <Dropdown.Item className={styles.item} onClick={() => clickSize(s)} key={s}>{s}</Dropdown.Item>
          )
          : "no more sizes"
        }
      </DropdownButton>
    </div>
  )
}