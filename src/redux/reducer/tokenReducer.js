import {
  POST_TOKEN_BEGIN,
  POST_TOKEN_SUCCESS,
  POST_TOKEN_FAIL
} from '../action/tokenAction'

const initialState = {
  userToken: {},
  token_loading:false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_TOKEN_BEGIN:
      return {
        ...state,
        token_loading: true,
        error: {}
      }
    case POST_TOKEN_SUCCESS:
      return {
        ...state,
        userToken: action.payload.data.user_token,
        token_loading: false
      }
    case POST_TOKEN_FAIL:
      return {
        ...state,
        token_loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}