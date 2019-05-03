import serverCall from '../../modules/serverCall'

export const filter=(text)=>dispatch=>{
  dispatch({
    type:FILTER_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/filter?query=${text}`
  })
  .then(res=>{
    dispatch({
      type: FILTER_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: FILTER_FAIL,
      payload: {error}
    })
    return error
  })
}

export const FILTER_BEGIN='FILTER_BEGIN'
export const FILTER_SUCCESS='FILTER_SUCCESS'
export const FILTER_FAIL='FILTER_FAIL'