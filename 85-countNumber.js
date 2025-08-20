var number = function (array) {
  return array.length === 0 ? [] : array.map((el, i) => `${i + 1}: ${el}`)
}
