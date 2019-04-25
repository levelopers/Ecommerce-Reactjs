import React from 'react'
import { Table } from 'react-bootstrap'


export default function BagTable({ items, handleClick }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Photos</th>
            <th>Title</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map(id =>
            <tr key={id}>
              <td>{items[id].item._id}</td>
              <td><img src={items[id].item.imagePath} style={{ maxWidth: "100%", maxHeight: "20vh" }} alt="" /></td>
              <td>{items[id].item.title}</td>
              <td>
                <button onClick={() => handleClick(id, true, false)}>+</button>
                {items[id].qty}
                <button onClick={() => handleClick(id, false, true)}>-</button>
              </td>
              <td>{items[id].price}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}
