# object-roomba [![Build Status](https://travis-ci.org/mderazon/object-roomba.svg?branch=master)](https://travis-ci.org/mderazon/object-roomba) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Clean your dirty objects

Useful when needing to parse objects from source that doesn't support data types decelerations like csv files etc. Not intended for complex objects

## Usage

```js
const roomba = require('object-roomba');

const schema = {
  age: Number,
  expiration: Date,
  is_active: Boolean,
  name: String,
  address: input => {
    if (!input) {
      return null;
    }
    return input;
  }
};

const clean = roomba(schema);

let dirtyObj = {
  age: '18',
  expiration: '2015-08-17 19:30:30.219',
  is_active: 'false',
  name: 'Michael D',
  address: ''
};

cleanObj = clean(dirtyObj);
console.log(cleanObj);
// {
//   age: 18,
//   expiration: Mon Aug 17 2015 19:30:30 GMT+0300 (IDT),
//   is_active: false,
//   name: 'Michael D',
//   address: null
// }
```

### Currently only supporting simple types

- String
- Number
- Date
- Boolean

### Options

You can pass options to roomba:

```js
const clean = roomba(opts, schema);
```

Available options are:

- `remove_extra_fields` - By default, fields that are not in the schema are kept untouched, you can remove them from the cleaned obj by setting this to true.
