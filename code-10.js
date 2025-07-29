function fakeBin(x) {
  let result = ''
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? (result += '0') : (result += '1')
  }
  return result
}
