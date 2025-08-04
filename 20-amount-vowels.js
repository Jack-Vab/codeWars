function getCount(str) {
  return str.replace(/\s/g, '').replace(/[^a, e, i, o, u]/g, '').length
}

console.log(getCount('abra if'))
