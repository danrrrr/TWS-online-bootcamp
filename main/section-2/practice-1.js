'use strict';

module.exports = function countSameElements(collection) {
  let arr = [];
  let result = [];
  collection.forEach(x => {
    arr[x] = !arr[x] ? 1 : arr[x] + 1;
  });
  Object.keys(arr).forEach(x => {
      result.push({'key': x, 'count': arr[x]});
  });
    return result;
}
