function sum(numbers) {
  return !numbers.length ? 0 : numbers.reduce((sum, el) => sum + el, 0)
}
