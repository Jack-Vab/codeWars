function twiceAsOld(dadYearsOld, sonYearsOld) {
  let i = dadYearsOld
  if (sonYearsOld !== 0 && dadYearsOld / sonYearsOld >= 2) {
    while (i !== 0) {
      if (i / sonYearsOld == 2) {
        return dadYearsOld - i
      }
      i--
    }
  } else {
    while (i) {
      if (sonYearsOld == 0) {
        return i
      } else if (i / sonYearsOld == 2) {
        return i - dadYearsOld
      }
      i++
    }
  }
}
