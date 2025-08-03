var number = function (busStops) {
  let change = busStops.map(
    (el) => el.reduce((sum, el, i) => (i == 0 ? sum + el : sum - el)),
    0
  )
  let result = change.reduce((sum, el) => sum + el, 0)
  return result
}

number([
  [10, 0],
  [3, 5],
  [5, 8],
])
