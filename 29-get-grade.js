function getGrade(s1, s2, s3) {
  const aver = (s1 + s2 + s3) / 3
  if (90 <= aver && aver <= 100) {
    return 'A'
  } else if (80 <= aver && aver < 90) {
    return 'B'
  } else if (70 <= aver && aver < 80) {
    return 'C'
  } else if (60 <= aver && aver < 70) {
    return 'D'
  } else return 'F'
}
