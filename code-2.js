function basicOp(operation, value1, value2) {
  //Code
  let str = `${value1} ${operation} ${value2} `
  let result = eval(str)
  return result
}

console.log(basicOp('+', 4, 7))
