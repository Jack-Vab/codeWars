function removeChar(str) {
  //You got this!
  let result = ''
  if (str.length <= 2) {
    return ''
  } else {
    for (let i = 1; i < str.length - 1; i++) {
      result += str[i]
    }
    return result
  }
}
