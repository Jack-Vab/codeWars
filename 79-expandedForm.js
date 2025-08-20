function expandedForm(num) {
  let temp
  num % 1 == 0 ? (temp = num) : (temp = Math.trunc(num).toString().split(''))
  let result = ''
  temp.forEach(
    (el, i) =>
      (result +=
        el == 0
          ? ''
          : `${el * Math.pow(10, temp.length - 1 - i)}${
              i === temp.length - 1 && num % 1 == 0 ? '' : ' '
            }`)
  )
  if (num % 1 == 0) {
    return result
  } else {
    let temp2 = num.toString().split('.')[1].split('')

    temp2.forEach(
      (el, i) =>
        (result +=
          el == 0
            ? ''
            : `${el}/${Math.pow(10, i + 1)}${
                i === temp2.length - 1 ? '' : ' '
              }`)
    )

    return result.replace(/\s+/g, ' + ')
  }
}
