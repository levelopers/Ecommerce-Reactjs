import React from 'react'
import styles from './dropList.module.sass'
import { NavDropdown } from 'react-bootstrap'


export default function DropList({ department, categories,clickCategory }) {
  return (
    <NavDropdown title={department} >
      {categories && categories.map(c =>
        <NavDropdown.Item onClick={()=>clickCategory(c)} key={c}>{c}</NavDropdown.Item>
      )}
    </NavDropdown>
  )
}


