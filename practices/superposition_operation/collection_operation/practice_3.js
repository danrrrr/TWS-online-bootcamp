'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let arr1 = [];
  let sum = 0;
  collection.filter(x => x % 2 === 1).forEach(a => arr1.push(a * 3 + 5));
  arr1.forEach(x => sum += x);
  return  sum;
}

module.exports = hybrid_operation_to_uneven;

