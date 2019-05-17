
const mapSearchURL = (searchUrl) => {
  const map = new Map()
  let queryArr = searchUrl.replace('?', '').split('&')
  for (const k of queryArr) {
    let pairArr = k.split('=')
    map.set(pairArr[0], pairArr[1])
  }
  return map
}
export default mapSearchURL