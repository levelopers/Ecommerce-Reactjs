import {login} from '../../modules/serverCall'

export const postToken = (email,password)=>dispatch=>{
  dispatch({
    type:POST_TOKEN_BEGIN
  })
  return login(email,password)
  .then(res=>{
    dispatch({
      type:POST_TOKEN_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type:POST_TOKEN_FAIL,
      payload:{error}
    })
  })
}

export const POST_TOKEN_BEGIN = 'POST_TOKEN_BEGIN'
export const POST_TOKEN_SUCCESS = 'POST_TOKEN_SUCCESS'
export const POST_TOKEN_FAIL = 'POST_TOKEN_FAIL'
