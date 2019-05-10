
export default (state) => {
  let result = ''
  let order = ''
  let department = ''
  let matched_all = []
  let range = ''
  for (let name in state) {
    // order filter
    if (name === 'Ascending' || name === 'Descending') {
      if (name === 'Ascending') {
        order = 'order=price'
      }
      if (name === 'Descending') {
        order = 'order=-price'
      }
    }
    // department filter
    if (name.match(/^men$|^women$/i)) {
      let _base_str = 'department='
      if (department) {
        _base_str = '&' + _base_str
      }
      let _match_str = name.match(/^men$|^women$/i)[0]
      department += _base_str + _match_str.charAt(0).toUpperCase().concat(_match_str.slice(1))
    }
    // price filter
    if (name === 'Less Than $29' || name === '$29 - $39' || name === '$39 - $49' || name === '$49 - $89' || name === 'Greater Than $89') {
      // change text range to digits range pair
      if (name.match(/less/i)) {
        name = name.replace(/[\D]+/i, '0 - ')
      }
      if (name.match(/greater/i)) {
        name = name.replace(/[\D]+/i, '').concat(' - 999')
      }
      //extract numbers in an array
      matched_all = matched_all.concat(name.match(/[\d]+/g))
    }
  }
  // sort the array
  let sorted_matched_arr = matched_all.sort(function (a, b) { return a - b })
  // remove duplicates
  for (let index = 0; index < sorted_matched_arr.length; index++) {
    if (sorted_matched_arr[index] === sorted_matched_arr[index + 1]) {
      sorted_matched_arr.splice(index, 2)
      index--
    }
  }
  // generate price range string
  for (let index = 0; index < sorted_matched_arr.length; index++) {
    if (index % 2 === 0) {
      if (range) {
        range += `&range=${sorted_matched_arr[index]}-${sorted_matched_arr[index + 1]}`
      } else {
        range += `range=${sorted_matched_arr[index]}-${sorted_matched_arr[index + 1]}`
      }
    }
  }
  if (order) {
    order = `&${order}`
  }
  if (department) {
    department = `&${department}`
  }
  result = range + order + department
  // console.log(result);
  return result
}

