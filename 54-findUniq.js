function findUniq(arr) {
  return arr.filter((el) => arr[0] == el).length == 1
    ? arr[0]
    : arr.filter((el) => arr[0] !== el)[0]
}
