function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false
  }
  let arr1 = [...array1]
  let arr2 = [...array2]

  while (arr1.length !== 0) {
    if (arr1.length !== arr2.length) {
      return false
    }
    arr2 = arr2.filter((el) => el !== Math.pow(arr1[0], 2))
    arr1 = arr1.filter((el) => el !== arr1[0])
  }
  if (arr2.length == 0) {
    return true
  } else {
    return false
  }
}
