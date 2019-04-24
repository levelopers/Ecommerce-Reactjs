import { connect } from 'react-redux'
import ProductOverview from './ProductOverview'
import {getProduct} from '../../redux/action/productAction'
import {getVariantsByProductId} from '../../redux/action/variantsAction'

const mapStoreToProps=state=>({
  product:state.product.product,
  variants:state.variant.variants
})
const mapDispatchToProps={
  getProduct,
  getVariantsByProductId
}

export default connect(mapStoreToProps,mapDispatchToProps)(ProductOverview)