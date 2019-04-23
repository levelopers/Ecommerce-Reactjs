import {connect} from 'react-redux'
import Header from './Header'
import {getDepartments} from '../../redux/action/departmentAction'
import { search } from '../../redux/action/searchAction';


const mapStoreToProps=state=>({
  user_token:state.token.user_token,
  departments:state.department.departments,
  search_result:state.search.result
})

const mapDispatchToProps=dispatch=>({
  getDepartments:dispatch(getDepartments()),
  search:(t)=>dispatch(search(t))
})

export default connect(mapStoreToProps,mapDispatchToProps)(Header)