function rentalCarCost(d) {
  let disc = 0
  d >= 7 ? (disc = 50) : d < 7 && d >= 3 ? (disc = 20) : ''
  let result = d * 40 - disc
  return result
}
