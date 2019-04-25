import {combineReducers} from 'redux'
import token from './tokenReducer'
import signin from './signinReducer'
import department from './departmentReducer'
import search from './searchReducer'
import product from './productReducer'
import variant from './variantsReducer'
import cart from './cartReducer'

export default combineReducers({
  token,
  signin,
  department,
  search,
  product,
  variant,
  cart
})