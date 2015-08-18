/*
  global describe: true
  global it: true
*/

var roomba = require('..')
var expect = require('chai').expect

function vaccum (type, val) {
  var clean = roomba({ key: type })
  return clean({key: val}).key
}

describe('general', function () {

  // boolean
  it('should return a boolean', function () {
    expect(vaccum(Boolean, true)).to.equal(true)
    expect(vaccum(Boolean, false)).to.equal(false)
    expect(vaccum(Boolean, '')).to.equal(false)
    expect(vaccum(Boolean, NaN)).to.equal(false)
    expect(vaccum(Boolean, null)).to.equal(false)
    expect(vaccum(Boolean, 'true')).to.equal(true)
    expect(vaccum(Boolean, 'false')).to.equal(false)
    expect(vaccum(Boolean, '0')).to.equal(true)
    expect(vaccum(Boolean, 0)).to.equal(false)
    expect(vaccum(Boolean, {})).to.equal(true)
  })

  // string
  it('should return a string', function () {
    expect(vaccum(String, '0')).to.equal('0')
    expect(vaccum(String, 0)).to.equal('0')
    expect(vaccum(String, 0.1)).to.equal('0.1')
    expect(vaccum(String, 'true')).to.equal('true')
    expect(vaccum(String, 'false')).to.equal('false')
    expect(vaccum(String, null)).to.equal('')
    expect(vaccum(String, null)).to.equal('')
  })

  // number
  it('should return a number', function () {
    expect(vaccum(Number, 0)).to.equal(0)
    expect(vaccum(Number, 1)).to.equal(1)
    expect(vaccum(Number, 0.1)).to.equal(0.1)
    expect(vaccum(Number, 1.0)).to.equal(1)
    expect(vaccum(Number, -0.1)).to.equal(-0.1)
    expect(vaccum(Number, -1)).to.equal(-1)
    expect(vaccum(Number, -0)).to.equal(0)
    expect(vaccum(Number, '0')).to.equal(0)
    expect(vaccum(Number, '0.1')).to.equal(0.1)
    expect(vaccum(Number, '1.0')).to.equal(1)
    expect(vaccum(Number, '1')).to.equal(1)
    expect(vaccum(Number, '-1')).to.equal(-1)
    expect(vaccum(Number, '-0.1')).to.equal(-0.1)
    expect(vaccum(Number, null)).to.equal(0)
    expect(isNaN(vaccum(Number, NaN))).to.be.true
    expect(isNaN(vaccum(Number, {}))).to.be.true
    expect(isNaN(vaccum(Number, '1abc'))).to.be.true
  })

  // date
  it('should return a date', function () {
    expect(vaccum(Date, 'Wed Aug 19 2015 00:19:48 GMT+0300 (IDT)')).to.be.instanceOf(Date)
    expect(vaccum(Date, 1439932788616)).to.be.null
    expect(vaccum(Date, '1abc')).to.be.null
    expect(vaccum(Date, null)).to.be.null
    expect(vaccum(Date, NaN)).to.be.null

  })
})
