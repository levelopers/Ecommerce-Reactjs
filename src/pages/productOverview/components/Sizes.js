import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'

export default function Sizes({ sizes, selectedSize, clickSize }) {
  return (
    <div>
      <DropdownButton title={selectedSize || sizes[0]}>
        {sizes.slice(1).length > 0
          ? sizes.slice(1).map(s =>
            <Dropdown.Item onClick={() => clickSize(s)} key={s}>{s}</Dropdown.Item>
          )
          : "no more sizes"
        }
      </DropdownButton>
    </div>
  )
}