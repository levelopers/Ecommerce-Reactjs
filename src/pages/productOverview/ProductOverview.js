import React, { Component } from 'react'
import styles from './stylesheets/productOverview.module.sass'
import { Button } from 'react-bootstrap'
import Header from '../../components/header/headerContainer'
import Variants from './components/Variants'
import mergeProductAndVariants from './utils/mergeProductAndVariants'
import jumpTo from '../../modules/Navigation'

export default class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      size: '',
      pic: '',
      selectedSize: '',
      id: ''
    }
  }
  componentDidMount() {
    this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0])
    this.props.getVariantsByProductId(this.props.location.pathname.split("/").slice(-1)[0])
  }


  handleClick = (variant) => {
    this.setState({
      color: variant.color,
      size: variant.size,
      pic: variant.imagePath,
      selectedSize: '',
      id: variant._id
    })
  }

  clickSize = (s) => {
    this.setState({
      selectedSize: s
    })
  }

  addToBag = () => {
    this.props.postCart(
      this.state.id || this.props.location.pathname.split("/").slice(-1)[0]
    ).then(res => {
      jumpTo('/bag')
    })
  }

  render() {
    return (
      <div className={styles.outbox}>
        <Header />
        {this.props.product &&
          <div className={styles.content_box}>
            <div className={styles.content}>
              {/* left image */}
              <div className={styles.image}>
                <img src={this.state.pic || this.props.product.imagePath} alt="" />
              </div>
              {/* right content box */}
              <div className={styles.context_outbox}>
                <div className={styles.context}>
                  {/* top descriptions */}
                  <div className={styles.title}>
                    {this.props.product.title}
                  </div>
                  <div className={styles.description}>
                    {this.props.product.description}
                  </div>
                  <div className={styles.price}>
                    ${this.props.product.price} CAD
                  </div>
                  {/* dotted border */}
                  <div className={styles.border}></div>
                  {/* bottom descriptions */}
                  <div className={styles.variants}>
                    <Variants
                      color={this.state.color || this.props.product.color}
                      size={this.state.size || this.props.product.size}
                      selectedSize={this.state.selectedSize}
                      variants={mergeProductAndVariants(this.props.product, this.props.variants)}
                      handleClick={this.handleClick}
                      clickSize={this.clickSize}
                    />
                  </div>
                  <div className={styles.btns}>
                    <Button className={styles.btn} onClick={this.addToBag} variant="outline-primary">Add to Bag</Button>
                    <Button className={styles.btn} variant="outline-danger">Buy Now</Button>
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
