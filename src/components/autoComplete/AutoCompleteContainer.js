import { connect } from 'react-redux'
import AutoComplete from './AutoComplete'
import {filter} from '../../redux/action/productAction' 

const mapStoreToProps = state => ({
  filter_result:state.product.filter_result,
  error:state.product.error,
  loading:state.product.loading
})

const mapDispatchToProps={
  filter
}

export default connect(mapStoreToProps, mapDispatchToProps)(AutoComplete)