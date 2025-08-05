function invert(array) {
  return array.map((el) => (el *= -1))
}

console.log(invert([1, 2, 3, 4, 5]))
