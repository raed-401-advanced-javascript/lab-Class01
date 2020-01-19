'use strict';

let validator = module.exports = {};



/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
    return typeof input === 'string';
};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 *
 */


validator.isValid = (input, rules) => {
  rules  = JSON.parse(reules)
  if(Object.getPrototypeOf(input).constructor.name == Object.getPrototypeOf(rules).constructor.name &&
   typeof(input.id)==typeof(rules.fields.id.type) &&
    typeof(input.name)==typeof(rules.fields.name.type)&&
    typeof(input.age)==typeof(rules.fields.age.type)&&
     Object.getPrototypeOf(input.children).constructor.name == Object.getPrototypeOf(rules.fields.children).constructor.name){
         
      return true;
  }  
};



