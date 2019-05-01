import {
  GET_CHECKOUT_BEGIN,
  GET_CHECKOUT_SUCCESS,
  GET_CHECKOUT_FAIL,
} from '../action/checkoutAction'

const initialState = {
  loading: false,
  approval_url: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECKOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_CHECKOUT_SUCCESS:
      return {
        loading: false,
        approval_url: action.payload.data
      }
    case GET_CHECKOUT_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}