import {
  POST_SIGNIN_BEGIN,
  POST_SIGNIN_SUCCESS,
  POST_SIGNIN_FAIL
} from '../action/signinAction'

const initialState = {
  loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNIN_BEGIN:
      return {
        loading: true
      }
    case POST_SIGNIN_SUCCESS:
      return {
        loading: false,
      }
    case POST_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}