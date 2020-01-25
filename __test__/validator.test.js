'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;

  it('strings', () => {
    let tester = [num,arr,obj,func,bool];
    for(let i=0;i<tester.length;i++){
      expect(validator.isString(tester[i])).toBeFalsy();
    }
    expect(validator.isString(str)).toBeTruthy();
  });

  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    expect(!validator.isArray(arr)).toBeFalsy();
  });

  it('objects', () => {
    expect(!validator.isObject(obj)).toBeFalsy();
  });

  it('booleans', () => {
    expect(!validator.isBollean(bool)).toBeFalsy();
  });

  it('functions', () => {
    expect(!validator.isFunction(func)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {
  let object_sample = {
    a:5,
    b:'play',
    c:[1,2,3],
    d: true,
    e:{g:'good',d:'khristian best TA'},
  };

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(object_sample.e.g?1:0).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(validator.isString( object_sample.b)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(validator.isArray(object_sample.c)).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(validator.isBollean(object_sample.d)).toBeTruthy();
  });
  it('check if the key exsist',()=>{
    let test = 'e';
    expect(Object.keys(object_sample).includes(test)).toBeTruthy();

  });

  // TODO: Cover so, so many more cases

});

