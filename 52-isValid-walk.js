function isValidWalk(walk) {
  let arr = walk.map((el) => {
    if (el == 'n') {
      return 1
    } else if (el == 's') {
      return -1
    } else if (el == 'w') {
      return 100
    } else if (el == 'e') {
      return -100
    }
  })
  return arr.length !== 10 ? false : arr.reduce((sum, el) => sum + el, 0) == 0
}
