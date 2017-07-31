'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr1 = collection.join().split(',');
  let arr2 = arr1.map(ele => parseInt(ele));
  return arr2;
}

module.exports = double_to_one;
