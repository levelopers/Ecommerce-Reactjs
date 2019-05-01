
const calcPrice=(subtotal)=>{
  return {
    taxes:parseFloat((subtotal*0.13).toFixed(2)),
    total:parseFloat((subtotal*1.13).toFixed(2))
  }
}
export default calcPrice