function countSheeps(sheep) {
  return sheep.filter((el) => el).length //(el) => el == true
}

console.log(countSheeps([undefined, null, false, true]))
