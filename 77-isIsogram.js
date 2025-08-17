function isIsogram(str) {
  let result = true
  let arr = str.toLowerCase().split('').sort()
  arr.forEach((el, i) => (el == arr[i + 1] ? (result = false) : ''))
  return result
}
