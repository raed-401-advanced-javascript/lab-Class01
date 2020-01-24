'use strict';

const validator = require('./lib/validator.js');

let required_client = JSON.stringify({
    fields: {
      id: {type: 'string', required: true},
      name: {type: 'string', required: true},
      age: {type: 'number', required: true},
      children: { type: 'array', valueType: 'string' },
    },
  };)

console.log(validator.isValid({
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[]},required_client));
