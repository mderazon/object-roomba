# object-roomba [![Build Status](https://travis-ci.org/mderazon/object-roomba.svg?branch=master)](https://travis-ci.org/mderazon/object-roomba)

> Clean your dirty objects

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Userful when needing to parse objects from source that doesn't support data types declerations like csv files etc.

## Usage

``` js
var roomba = require('object-roomba')

var schema = {
  age: Number,
  expiration: Date,
  is_active: Boolean,
  name: String,
  address: function (input) {
    if (!input) { return null }
    return input
  }
}

var clean = roomba(schema)

var dirty_obj = {
  age: '18',
  expiration: '2015-08-17 19:30:30.219',
  is_active: 'false',
  name: 'Michael D',
  address: ''
}

clean_obj = clean(dirty_obj)
console.log(clean_obj)
// {
//   age: 18,
//   expiration: Mon Aug 17 2015 19:30:30 GMT+0300 (IDT),
//   is_active: false,
//   name: 'Michael D',
//   address: null
// }
```

Currently supporting
- String
- Number
- Date
- Boolean
