function getSum(a, b) {
  let result = 0
  if (a == b) {
    result = a
  } else if (a < b) {
    while (a <= b) {
      result += a
      a++
    }
  } else {
    while (a >= b) {
      result += b
      b++
    }
  }
  return result
}
