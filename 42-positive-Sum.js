function positiveSum(arr) {
  return arr.length == 0 ? 0 : arr.reduce((a, b) => (b > 0 ? a + b : a), 0)
}
