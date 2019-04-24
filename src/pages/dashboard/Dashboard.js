import React from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'
import { Row } from 'react-bootstrap'

export default function Dashboard(props) {
  const { products } = props
  return (
    <div>
      <HeaderContainer />
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '6%' }} >
        {products && products.map(p =>
          <div
            key={p.title}
            className="col-sm-6 col-md-4 col-lg-3 m-3 "
            onClick={()=>props.history.push(`/product-overview/${p._id}`)}>
            <Product
              title={p.title}
              price={`$${p.price} CAD`}
              color={p.color}
              image={p.imagePath}
            />
          </div>
        )}
      </div>
    </div>
  )
}





