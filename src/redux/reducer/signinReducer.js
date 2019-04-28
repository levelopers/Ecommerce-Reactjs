import {
  POST_SIGNIN_BEGIN,
  POST_SIGNIN_SUCCESS,
  POST_SIGNIN_FAIL
} from '../action/signinAction'

const initialState = {
  signin_loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN_BEGIN:
      return {
        signin_loading: true
      }
    case POST_SIGNIN_SUCCESS:
      return {
        signin_loading: false,
      }
    case POST_SIGNIN_FAIL:
      return {
        signin_loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}