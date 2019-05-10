import { getAllProducts, applyFilters } from '../../redux/action/productAction'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
const mapStoreToProps = state => ({
  products: state.product.products,
  loading:state.product.loading
})
const mapDispatchToProps = dispatch => ({
  getAllProducts: ()=>dispatch(getAllProducts()),
  applyFilters:(filter_string)=>dispatch(applyFilters(filter_string))
})

export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard)