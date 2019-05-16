import Signin from './Signin'
import { connect } from 'react-redux'
import { signin } from '../../redux/action/signinAction'

const mapDispatchToProps = {
  signin
}
const mapStoreToProps = state => ({
  signin_loading: state.signin.signin_loading,
  signin_error: state.signin.error
})

export default connect(mapStoreToProps, mapDispatchToProps)(Signin)
