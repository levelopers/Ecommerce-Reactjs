export default (product,variants)=>{
  let resultArray=[product||{}]

  for (const v of variants||[]) {
    resultArray.push(v||{})
  }
  return resultArray
}