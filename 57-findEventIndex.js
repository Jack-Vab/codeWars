function findEvenIndex(arr) {
  let result = -1
  arr.forEach((el, i) => {
    if (i == 0) {
      0 == arr.reduce((sum, el) => sum + el, 0) - arr[0] && result == -1
        ? (result = i)
        : ''
    } else {
      arr.slice(0, i).reduce((sum, el) => sum + el, 0) ==
        arr.slice(i + 1).reduce((sum, el) => sum + el, 0) && result == -1
        ? (result = i)
        : ''
    }
  })
  return result
}
