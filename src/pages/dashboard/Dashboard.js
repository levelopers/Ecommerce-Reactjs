import React, { Component } from 'react'
import HeaderContainer from '../../components/header/headerContainer'
import Product from './components/Product'
import LoadingAnimation from '../../components/loadingAnimation'

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
      <div style={dashboard_outbox}>
        <HeaderContainer />
        <div style={dashboard_box}>
          {this.props.loading &&
            <LoadingAnimation />
          }
          {products && products.map(p =>
            <div
              key={p.title}
              className="col-6 col-sm-4 col-md-4 col-lg-3 my-3 "
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
var dashboard_outbox = {
  minWidth: '320px',
  minHeight: '568px'
}
var dashboard_box = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '6%',
  marginTop: '70px'
}




