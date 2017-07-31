'use strict';

function amount_even(collection) {

  //在这里写入代码
  let sum = 0;
  collection.filter(x => x % 2 ===0).forEach(a => sum += a);
  return sum;
}

module.exports = amount_even;
