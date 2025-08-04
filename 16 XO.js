function XO(str) {
  let strLow = str.toLowerCase()
  return strLow.split('x').length - 1 == strLow.split('o').length - 1
}

console.log(XO('xoxo'))
