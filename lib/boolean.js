module.exports = function (input) {
  if (input === 'false') {
    return false
  }

  return !!input
}
