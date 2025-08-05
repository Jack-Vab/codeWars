function array_diff(a, b) {
  return a.filter((e) => !b.includes(e))
}

console.log(arrayDiff([1, 2, 2], []))
