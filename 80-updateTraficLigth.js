function updateLight(current) {
  const traf = ['green', 'yellow', 'red']
  return traf.indexOf(current) < 2 ? traf[traf.indexOf(current) + 1] : traf[0]
}
