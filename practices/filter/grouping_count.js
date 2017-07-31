'use strict';

function grouping_count(collection) {
  let result = [];
  collection.forEach( ele => { !result[ele] ? result[ele] = 1 : result[ele]++;});
  return result;
}

module.exports = grouping_count;
