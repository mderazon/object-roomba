var lodash = require('lodash')
var boolean = require('./boolean')
var string = require('./string')
var number = require('./number')
var date = require('./date')

module.exports = function (schema) {
  var _schema = {}
  Object.keys(schema).forEach(function (key) {
    _schema[key] = schema[key] === Boolean ? boolean :
      schema[key] === Date ? date :
        schema[key] === String ? string :
          schema[key] === Number ? number :
            typeof schema[key] === 'function' ? schema[key] : null

    if (!_schema[key]) {
      throw new Error('unsupported key ' + schema[key])
    }
  })

  return function (opts, obj) {
    if (opts && !obj) {
      obj = opts
      opts = {}
    }

    var res = lodash.chain(obj)
      .pick(Object.keys(_schema))
      .mapValues(function (value, key) {
        return _schema[key](value)
      })
      .value()

    return res
  }
}
