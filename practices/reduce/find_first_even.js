'use strict';

function find_first_even(collection) {
  return collection[collection.findIndex(ele => ele % 2 === 0)]
}

module.exports = find_first_even;

