function twoSum(numbers, target) {
  let temp = [...numbers]
  let result = false
  while (temp.length > 1) {
    if (result) {
      return result[0] !== result[1]
        ? [numbers.indexOf(result[0]), numbers.indexOf(result[1])]
        : [numbers.indexOf(result[0]), numbers.lastIndexOf(result[1])]
    }
    temp.forEach((el, i) => {
      if (i !== 0) {
        if (temp[0] + el === target) {
          result = [temp[0], temp[i]]
        }
      }
    })
    temp.shift()
  }

  return result[0] !== result[1]
    ? [numbers.indexOf(result[0]), numbers.indexOf(result[1])]
    : [numbers.indexOf(result[0]), numbers.lastIndexOf(result[1])]
}
