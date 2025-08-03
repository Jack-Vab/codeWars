function reverseWords(str) {
  return str
    .split(' ')
    .map((el) => el.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords('   double   spaced   words  '))
