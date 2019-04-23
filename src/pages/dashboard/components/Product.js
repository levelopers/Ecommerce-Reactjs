import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({ title, color, price, image }) {
  return (
    <Card 
    border="primary" 
    className="col-sm-6 col-md-4 col-lg-3 m-3"
    
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {price}
        </Card.Subtitle>
        <Card.Text>
          {color}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
