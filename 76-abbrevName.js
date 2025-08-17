function abbrevName(name) {
  let arr = name.split(' ').map((el) => el[0])
  arr.splice(1, 0, '.')
  return arr.join('').toUpperCase()
}
