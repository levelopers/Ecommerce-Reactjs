export default (object,regex)=>{
  for (const key in object) {
    if (key.match(regex)) {
      return key
    }
  }
  return undefined
}