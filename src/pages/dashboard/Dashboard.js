import React from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'
import { Row } from 'react-bootstrap'

export default function Dashboard({ products }) {
  return (
    <div>
      <HeaderContainer />
      <Row className="m-5">
        {products && products.map(p =>
          <Product
            key={p.title}
            title={p.title}
            price={`$${p.price} CAD`}
            color={p.color}
            image={p.imagePath}
          />
        )}
      </Row>
    </div>
  )
}




