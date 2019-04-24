import React, { Component } from 'react'
import styles from './stylesheets/productOverview.module.sass'
import { Button } from 'react-bootstrap'
import Header from '../../components/header/headerContainer'
import Variants from './components/Variants'
import mergeProductAndVariants from './utils/mergeProductAndVariants'

// let product = {
//   "_id": "5bedf720c14d7822b39d9d52",
//   "imagePath": "https://static.zara.net/photos///2018/I/0/2/p/5575/380/406/2/c-158-0-2048-3072/w/1920/5575380406_1_1_1.jpg?ts=1527530663760",
//   "title": "Basic Slim Jeans",
//   "description": "Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.",
//   "price": 45.99,
//   "color": "Light Blue",
//   "size": "XS,S,M",
//   "quantity": 8,
//   "department": "Men",
//   "category": "Jeans",
//   "__v": 0
// }
// let variants = [
//   {
//     "_id": "5cbf97e207623c38b0250b45",
//     "productID": "5bedf720c14d7822b39d9d52",
//     "imagePath": "https://static.zara.net/photos///2018/I/0/2/p/5575/380/407/2/c-269-0-2048-3072/w/1920/5575380407_1_1_1.jpg?ts=1527602989905",
//     "color": "Dark Blue",
//     "size": "M,XL",
//     "quantity": 5,
//     "__v": 0
//   }
// ]
// const { imagePath, title, description, price, color, size } = product

export default class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:  '',
      size: '',
      pic:  '',
      selectedSize: ''
    }
  }
  componentDidMount(){
    this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0])
    this.props.getVariantsByProductId(this.props.location.pathname.split("/").slice(-1)[0])
  }
  

  handleClick = (variant) => {
    this.setState({
      color: variant.color,
      size: variant.size,
      pic: variant.imagePath,
      selectedSize:''
    })
  }

  clickSize = (s) => {
    this.setState({
      selectedSize: s
    })
  }

  render() {
    return (
      <div className={styles.outbox}>
        <Header />
        {this.props.product&&
        <div className={styles.content_box}>
          <div className={styles.content}>
            <div className={styles.image}>
              <img src={this.state.pic||this.props.product.imagePath} alt="" />
            </div>
            <div className={styles.context_outbox}>
              <div className={styles.context}>
                <div className={styles.title}>
                  {this.props.product.title}
                </div>
                <div className={styles.description}>
                  {this.props.product.description}
                </div>
                <div className={styles.price}>
                  ${this.props.product.price} CAD
              </div>
                <div className={styles.border}></div>
                <div className={styles.variants}>
                  <Variants
                    color={this.state.color||this.props.product.color}
                    size={this.state.size||this.props.product.size}
                    selectedSize={this.state.selectedSize}
                    variants={mergeProductAndVariants(this.props.product, this.props.variants)}
                    handleClick={this.handleClick}
                    clickSize={this.clickSize}
                  />
                </div>
                <div className={styles.btns}>
                  <Button variant="outline-primary">Add to Bag</Button>
                  <Button variant="outline-danger">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}
