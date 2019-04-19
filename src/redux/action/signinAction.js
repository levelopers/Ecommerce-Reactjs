import serverCall from '../../modules/serverCall'

export const signin=(fullname,email,password,verifyPassword)=>dispatch=>{
  dispatch({
    type: POST_SIGNIN_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/users/signin',
    data:{
      fullname,email,password,verifyPassword
    }
  })
  .then(res=>{
    console.log('signin res:\n');
    console.log(res);
    
    dispatch({
      type:POST_SIGNIN_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    console.log('signin err:\n');
    console.log(error.response);
    
    dispatch({
      type:POST_SIGNIN_FAIL,
      payload:{error}
    })
    return error
  })
}

export const POST_SIGNIN_BEGIN='POST_SIGNIN_BEGIN'
export const POST_SIGNIN_SUCCESS='POST_SIGNIN_SUCCESS'
export const POST_SIGNIN_FAIL='POST_SIGNIN_FAIL'
