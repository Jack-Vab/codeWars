function likes(names) {
  let message = ''
  if (names.length == 0) {
    message = 'no one likes this'
  } else if (names.length == 1) {
    message = `${names[0]} likes this`
  } else if (names.length > 1 && names.length < 4) {
    names.map((el, i) =>
      i + 1 === names.length
        ? (message += `${el} `)
        : i + 2 !== names.length
        ? (message += `${el}, `)
        : (message += `${el} and `)
    )
    message += 'like this'
  } else {
    message += `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`
  }
  return message
}
