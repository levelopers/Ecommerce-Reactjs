import {
  SEARCH_BEGIN,
  SEARCH_SUCCESS,
  SEARCH_FAIL
} from '../action/searchAction'

const initialState={
  result:null,
  loading: false,
  error:null,
}

export default (state=initialState,action)=>{
    switch (action.type){
      case SEARCH_BEGIN:
      return {
        loading: true
      }
      case SEARCH_SUCCESS:
      console.log(action.payload.data);
      
      return {
        loading: false,
        result: action.payload.data
      }
      case SEARCH_FAIL:
      return{
        loading: false,
        error:action.payload.error
      }
      default :
      return state
    }
}