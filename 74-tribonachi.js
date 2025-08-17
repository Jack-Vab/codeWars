function tribonacci(signature, n) {
  if (n == 0) {
    return []
  } else if (n < 3) {
    return signature.slice(0, n)
  }
  let result = [...signature]
  let i = 0
  while (i < n - 3) {
    if (i == 0) {
      result.push(result.reduce((sum, el) => sum + el, 0))
    } else {
      result.push(result.slice(i).reduce((sum, el) => sum + el, 0))
    }
    i++
  }
  return result
}
