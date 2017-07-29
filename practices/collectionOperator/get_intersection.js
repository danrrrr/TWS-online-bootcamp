'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  result = collection_b.filter(ele => collection_a.indexOf(ele) !== -1);
  return result;
}

module.exports = get_intersection;
