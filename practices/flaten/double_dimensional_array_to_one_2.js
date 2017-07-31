'use strict';

function double_to_one(collection) {
  return [...new Set(collection.join().split(',').map(ele => parseInt(ele)))];
}

module.exports = double_to_one;
