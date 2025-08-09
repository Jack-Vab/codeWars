function points(games) {
  let count = 0
  let arr = games.map((el) => el.split(':'))
  arr.forEach((el) =>
    el[0] > el[1] ? (count += 3) : el[0] == el[1] ? count++ : ''
  )
  return count
}
