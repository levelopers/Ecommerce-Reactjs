import {connect } from 'react-redux'
import Login from './Login'
import {postToken} from '../../redux/action/tokenAction'
const mapDispatchToProps={
  postToken
}
const mapStoreToProps=state=>({
  login_loading:state.token.token_loading
})

export default connect(mapStoreToProps,mapDispatchToProps)(Login)