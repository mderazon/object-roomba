var boolean = require('./boolean');
var string = require('./string');
var number = require('./number');
var date = require('./date');

module.exports = function(opts, schema) {
  if (opts && !schema) {
    schema = opts;
    opts = {};
  }

  var _schema = {};
  Object.keys(schema).forEach(function(key) {
    _schema[key] =
      schema[key] === Boolean
        ? boolean
        : schema[key] === Date
        ? date
        : schema[key] === String
        ? string
        : schema[key] === Number
        ? number
        : typeof schema[key] === 'function'
        ? schema[key]
        : null;

    if (!_schema[key]) {
      throw new Error('unsupported key ' + schema[key]);
    }
  });

  return function(obj) {
    var sanitized = {};
    var keys = Object.keys(schema);
    Object.keys(obj).forEach(function(k) {
      if (keys.indexOf(k) !== -1) {
        sanitized[k] = _schema[k](obj[k]);
      } else if (!opts.remove_extra_fields) {
        // field is not in schema, decide if we should keep it according to opts
        sanitized[k] = obj[k];
      }
    });

    return sanitized;
  };
};
