'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr1 = [];
  collection.filter(x => x % 2 === 1).forEach(a => arr1.push(a * 3 + 5));
  return  arr1.reduce((sum, current) => sum + current, 0);
}

module.exports = hybrid_operation_to_uneven;

