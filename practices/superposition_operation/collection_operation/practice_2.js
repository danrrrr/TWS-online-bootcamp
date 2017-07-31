'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(x => x % 2 === 1);
  let arr2 = [];
  arr.forEach(x => arr2.push(x * 3 + 2));
  return arr2;
}

module.exports = hybrid_operation_to_uneven;

