'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr1 = collection.join().split(',').map(ele => parseInt(ele));
  let set1 = new Set(arr1);
  return [...set1];
}

module.exports = double_to_one;
