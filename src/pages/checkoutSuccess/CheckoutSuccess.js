import React, { Component } from 'react'
import mapSearchURL from './utils/mapSearchURL'
import jumpTo from '../../modules/Navigation'
import Header from '../../components/header/headerContainer'
import checkMark from '../../assets/images/checkmark.svg'
import styles from './stylesheet/checkoutSuccess.module.sass'
export default class CheckoutSuccess extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    const UrlQuery = this.props.location.search
    const queryPair = mapSearchURL(UrlQuery)
    if (queryPair.has("paymentId") && queryPair.has("PayerID")) {
      this.props.getPayment(queryPair.get("paymentId"), queryPair.get("PayerID"))
    }
  }

  render() {
    const payment = this.props.payment
    return (
      <div className={styles.outbox}>
        <Header />
        {payment &&
          <div className={styles.box}>
            <div className={styles.checkMark}>
              <div className={styles.pic}>
                <img src={checkMark} alt="" />
              </div>
              <div className={styles.text}>
                Thank you for your pruchase!
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.order}>
                  <div className={styles.title}>
                    Your order number is: </div>
                  <div className={styles.num}>
                    {payment.cart}
                  </div>
                </div>
                <div className={styles.address}>
                  <div className={styles.title}>
                    Billing & Shipping information:
                  </div>
                  {Object.keys(payment.payer.payer_info.shipping_address).map(p =>
                    <div key={p}>
                      {p}: {payment.payer.payer_info.shipping_address[p]}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.btn}>
                <button onClick={() => jumpTo('/dashboard')}> Continue Shopping</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

