import serverCall from '../../modules/serverCall'

export const getCheckoutUrl=(cartId)=>dispatch=>{
  dispatch({
    type:GET_CHECKOUT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/checkout/${cartId}`
  })
  .then(res=>{
    dispatch({
      type:GET_CHECKOUT_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type:GET_CHECKOUT_FAIL,
      payload:{error}
    })
    return error
  })
}


export const GET_CHECKOUT_BEGIN = 'GET_CHECKOUT_BEGIN'
export const GET_CHECKOUT_SUCCESS='GET_CHECKOUT_SUCCESS'
export const GET_CHECKOUT_FAIL='GET_CHECKOUT_FAIL'