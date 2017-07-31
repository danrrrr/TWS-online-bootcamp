'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum = 0;
  collection.forEach(x => sum += x);
  return sum / collection.length;
}

module.exports = compute_average;

