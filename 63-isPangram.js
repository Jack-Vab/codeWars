function isPangram(string) {
  let alphabet = []
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97 + i)) // 97 - код 'a'
  }

  let words = string
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
  words.forEach((el) =>
    alphabet.includes(el) ? alphabet.splice(alphabet.indexOf(el), 1) : ''
  )
  return alphabet.length == 0
}
