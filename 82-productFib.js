function productFib(prod) {
  let fib = [0, 1]
  let i = 1
  while (fib[i] * fib[i - 1] < prod) {
    fib.push(fib[i] + fib[i - 1])
    i++
    if (fib[i] * fib[i - 1] === prod) {
      return [fib[i - 1], fib[i], true]
    }
  }
  return [fib[i - 1], fib[i], false]
}
