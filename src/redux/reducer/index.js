import {combineReducers} from 'redux'
import token from './tokenReducer'
import signin from './signinReducer'
import department from './departmentReducer'
import product from './productReducer'
import variant from './variantsReducer'
import cart from './cartReducer'

export default combineReducers({
  token,
  signin,
  department,
  product,
  variant,
  cart
})