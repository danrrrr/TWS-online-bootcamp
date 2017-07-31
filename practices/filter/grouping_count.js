'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};
  collection.forEach( ele => { !result[ele] ? result[ele] = 1 : result[ele]++;});
  return result;
}

module.exports = grouping_count;
