import serverCall from '../../modules/serverCall'

export const search=(text)=>dispatch=>{
  dispatch({
    type:SEARCH_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/search?query=${text}`
  })
  .then(res=>{
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: SEARCH_FAIL,
      payload: {error}
    })
    return error
  })
}

export const SEARCH_BEGIN='SEARCH_BEGIN'
export const SEARCH_SUCCESS='SEARCH_SUCCESS'
export const SEARCH_FAIL='SEARCH_FAIL'