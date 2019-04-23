import serverCall from '../../modules/serverCall'

export const getAllProducts=()=>dispatch=>{
  dispatch({
    type:GET_ALL_PRODUCTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const GET_ALL_PRODUCTS_BEGIN='GET_ALL_PRODUCTS_BEGIN'
export const GET_ALL_PRODUCTS_SUCCESS='GET_ALL_PRODUCTS_SUCCESS'
export const GET_ALL_PRODUCTS_FAIL='GET_ALL_PRODUCTS_FAIL'