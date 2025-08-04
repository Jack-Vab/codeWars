function highAndLow(numbers) {
  const max = Math.max(...numbers.split(' ').map((el) => Number(el)))
  const min = Math.min(...numbers.split(' ').map((el) => Number(el)))
  return `${max} ${min}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
