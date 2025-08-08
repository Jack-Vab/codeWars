function high(x) {
  let alphabet = ''
  let values = []
  for (let i = 97; i <= 122; i++) {
    alphabet += String.fromCharCode(i)
  }
  words = x.split(' ')
  chars = words.map((el) => el.split(''))
  chars.map((el) =>
    values.push(el.reduce((sum, el) => (sum += alphabet.indexOf(el) + 1), 0))
  )

  return words[values.indexOf(Math.max(...values))]
}
