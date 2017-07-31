'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  const arr = collection.map(x => x * 3 + 2);
  let sum = 0;
  arr.forEach(x => sum += x);
  return sum;
}

module.exports = hybrid_operation;

