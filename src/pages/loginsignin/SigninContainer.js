import Signin from './Signin'
import { connect } from 'react-redux'
import { signin } from '../../redux/action/signinAction'

const mapDispatchToProps = {
  signin
}
const mapStoreToProps = state => ({
  signin_loading: state.signin.signin_loading
})

export default connect(mapStoreToProps, mapDispatchToProps)(Signin)
