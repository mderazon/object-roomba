module.exports = function(input) {
  if (Object.prototype.toString.call(input) === '[object Date]') {
    return input;
  }
  input = Date.parse(input);
  return !isNaN(input) ? new Date(input) : null;
};
