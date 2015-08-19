module.exports = function (input) {
  if (typeof input === 'object' && input !== null && input.toString) {
    input = input.toString()
  } else if (isNaN(input) && typeof input !== 'undefined' && !input.length) {
    input = ''
  } else if (input !== null && typeof input !== 'undefined' && typeof input !== 'string') {
    input += ''
  }
  return input
}
