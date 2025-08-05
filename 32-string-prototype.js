Object.defineProperty(String.prototype, 'toJadenCase', {
  value: function toJadenCase() {
    return this.split(' ')
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(' ')
  },
})
