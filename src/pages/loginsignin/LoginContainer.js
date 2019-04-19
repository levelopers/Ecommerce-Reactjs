import {connect } from 'react-redux'
import Login from './Login'
import {postToken} from '../../redux/action/tokenAction'
const mapDispatchToProps={
  postToken
}

export default connect(null,mapDispatchToProps)(Login)