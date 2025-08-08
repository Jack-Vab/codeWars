function persistence(num) {
  let count = 0
  let arr = [num]

  while (arr[0] >= 10) {
    arr[0]
      .toString()
      .split('')
      .reduce((res, el) => (arr[0] = res *= Number(el)), 1)
    count++
  }
  return count
}
