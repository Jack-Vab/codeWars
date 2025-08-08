function towerBuilder(nFloors) {
  let arr = []
  for (let i = 0; i < nFloors; i++) {
    let str =
      ' '.repeat(nFloors - i - 1) +
      '*'.repeat(i * 2 + 1) +
      ' '.repeat(nFloors - i - 1)
    arr.push(str)
  }
  return arr
}
