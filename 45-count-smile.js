function countSmileys(arr) {
  let count = 0
  arr.map((el) => {
    if (el.length < 3) {
      ;(el[0] === ':' || el[0] === ';') && (el[1] === 'D' || el[1] === ')')
        ? count++
        : null
    } else {
      ;(el[0] === ':' || el[0] === ';') &&
      (el[1] === '-' || el[1] === '~') &&
      (el[2] === 'D' || el[2] === ')')
        ? (count += 1)
        : null
    }
  })
  return count
}
