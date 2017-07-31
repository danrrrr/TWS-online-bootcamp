'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = 0;
  collection.forEach(x => sum += x);
  let average = Math.ceil(sum / collection.length);
  average = average === 0 ? 26 : average;
  return (average + 9).toString(36);
}

module.exports = average_to_letter;

