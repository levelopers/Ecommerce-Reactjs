import React from 'react'
import styles from './dropList.module.sass'
import { NavDropdown } from 'react-bootstrap'
import jumpTo from '../../modules/Navigation'


export default function DropList({ department, categories,clickCategory }) {
  return (
    <NavDropdown title={department} >
      {categories && categories.map(c =>
        <NavDropdown.Item 
        onClick={()=>{
          clickCategory(c)
          jumpTo('/dashboard')
        }}  
        key={c}>{c}
        </NavDropdown.Item>
      )}
    </NavDropdown>
  )
}


