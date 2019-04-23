import React from 'react'
import styles from './dropList.module.sass'
import { NavDropdown } from 'react-bootstrap'


export default function DropList({ department, categories }) {
  return (
    <NavDropdown title={department} >
      {categories && categories.map(c =>
        <NavDropdown.Item key={c} href="#action/3.1">{c}</NavDropdown.Item>
      )}
    </NavDropdown>
  )
}


