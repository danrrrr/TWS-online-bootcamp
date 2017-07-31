'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let index = collection.findIndex(ele => ele % 2 === 0);
  return collection[index]
}

module.exports = find_first_even;

