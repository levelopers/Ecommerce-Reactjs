import Signin from './Signin'
import {connect} from 'react-redux'
import {signin} from '../../redux/action/signinAction'

const mapDispatchToProps={
  signin
}

export default connect(null,mapDispatchToProps)(Signin)
