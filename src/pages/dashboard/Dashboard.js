import React, { Component } from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts()
    }
  }

  render() {
    const { products } = this.props

    return (
      <div>
        <HeaderContainer />
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '6%' }} >
          {products && products.map(p =>
            <div
              key={p.title}
              className="col-sm-6 col-md-4 col-lg-3 m-3 "
              onClick={() => this.props.history.push(`/product-overview/${p._id}`)}>
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
}




