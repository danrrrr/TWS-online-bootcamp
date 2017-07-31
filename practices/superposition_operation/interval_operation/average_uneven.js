'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let sum = 0;
  let arr = collection.filter(x => x % 2 ===1);
  arr.forEach(x => sum += x);
  return sum / arr.length;
}

module.exports = average_uneven;
