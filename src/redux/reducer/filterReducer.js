import {
  FILTER_BEGIN,
  FILTER_SUCCESS,
  FILTER_FAIL
} from '../action/filterAction'

const initialState = {
  loading: false,
  filter_result: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        filter_result: action.payload.data.filter
      }

    case FILTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}