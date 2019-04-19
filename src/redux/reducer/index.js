import {combineReducers} from 'redux'
import tokenReducer from './tokenReducer'
import signinReducer from './signinReducer'
export default combineReducers({
  tokenReducer,
  signinReducer
})