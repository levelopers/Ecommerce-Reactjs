import { connect } from 'react-redux'
import AutoComplete from './AutoComplete'
import { filter } from '../../redux/action/filterAction'

const mapStoreToProps = state => ({
  filter_result: state.filter.filter_result,
  error: state.filter.error,
  loading: state.filter.loading
})

const mapDispatchToProps = {
  filter
}

export default connect(mapStoreToProps, mapDispatchToProps)(AutoComplete)