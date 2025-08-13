function removeSmallest(numbers) {
  let result = [...numbers]
  result.splice(result.indexOf(Math.min(...result)), 1)
  return result
}
