import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL
} from '../action/productAction'

const initialState={
  products:null,
  loading: false,
  error:null,
}

export default (state=initialState,action)=>{
    switch (action.type){
      case GET_ALL_PRODUCTS_BEGIN:
      return {
        loading: true
      }
      case GET_ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.data.products
      }
      case GET_ALL_PRODUCTS_FAIL:
      return{
        loading: false,
        error:action.payload.error
      }
      default :
      return state
    }
}