function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    let arr = [a, b, c]
    arr.sort((a, b) => b - a)
    return arr[0] < arr[1] + arr[2]
  } else {
    return false
  }
}
