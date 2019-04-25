import { getAllProducts } from '../../redux/action/productAction'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
const mapStoreToProps = state => ({
  products: state.product.products
})
const mapDispatchToProps = dispatch => ({
  getAllProducts: ()=>dispatch(getAllProducts())
})

export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard)