import React from 'react'
import styles from './stylesheets/productOverview.module.sass'
import { Button, Dropdown,DropdownButton } from 'react-bootstrap'

let product = {
  "_id": "5bedf720c14d7822b39d9d52",
  "imagePath": "https://static.zara.net/photos///2018/I/0/2/p/5575/380/406/2/c-158-0-2048-3072/w/1920/5575380406_1_1_1.jpg?ts=1527530663760",
  "title": "Basic Slim Jeans",
  "description": "Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.",
  "price": 45.99,
  "color": "Light Blue",
  "size": "XS,S,M",
  "quantity": 8,
  "department": "Men",
  "category": "Jeans",
  "__v": 0
}
export default function ProductOverview() {
  return (
    <div className={styles.outbox}>
      <div className={styles.content}>
        <div className={styles.image}>

        </div>
        <div className={styles.context}>
          <div className={styles.title}>

          </div>
          <div className={styles.intro}>

          </div>
          <div className={styles.price}>

          </div>
          <div className={styles.border}>

          </div>
          <div className={styles.variants}>

          </div>
          <div className={styles.sizes}>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className={styles.btns}>
            <Button variant="outline-primary">Add to Bag</Button>
            <Button variant="outline-danger">Buy Now</Button>

          </div>
        </div>
      </div>
    </div>
  )
}
