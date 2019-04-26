import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../stylesheets/product.module.sass'

export default function Product({ title, color, price, image }) {
  return (
    <Card
      border="primary"
      className={`${styles.card} p-2`}
      style={{ height: '100%' }}
    >
      <Card.Img className={styles.image} variant="top" src={image} />
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div className={styles.subtitle}>
            {price}
          </div>
        </Card.Subtitle>
        <Card.Text className={styles.color}>
          {color}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
