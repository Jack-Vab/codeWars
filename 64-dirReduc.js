function dirReduc(arr) {
  let numReduc = arr.map((el) => {
    switch (el) {
      case 'NORTH':
        return (el = 1)
      case 'SOUTH':
        return (el = -1)
      case 'EAST':
        return (el = 2)
      case 'WEST':
        return (el = -2)
    }
  })
  let result = []

  while (numReduc.length !== result.length) {
    result = [...numReduc]
    numReduc.forEach((el, i) =>
      el + numReduc[i + 1] == 0 ? numReduc.splice(i, 2) : ''
    )
  }

  return result.map((el) => {
    switch (el) {
      case 1:
        return (el = 'NORTH')
      case -1:
        return (el = 'SOUTH')
      case 2:
        return (el = 'EAST')
      case -2:
        return (el = 'WEST')
    }
  })
}
