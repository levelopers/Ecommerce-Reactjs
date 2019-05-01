import { connect } from 'react-redux'
import CheckoutSuccess from './CheckoutSuccess'
import { getPayment } from '../../redux/action/checkoutAction'

const mapStoreToProps = state => ({
  payment: state.checkout.payment
})
const mapDispatchToProps = dispatch => ({
  getPayment: (paymentId, payerId) => dispatch(getPayment(paymentId, payerId))
})

export default connect(mapStoreToProps, mapDispatchToProps)(CheckoutSuccess)