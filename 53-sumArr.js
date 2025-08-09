function sumArray(array) {
  return !Array.isArray(array) || array.length < 3
    ? 0
    : array.reduce((sum, el) => sum + el, 0) -
        Math.max(...array) -
        Math.min(...array)
}
