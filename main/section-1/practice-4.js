'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let arr = [];
  collectionA.forEach(x => arr.push(x.key));
  return arr.filter(x => objectB.value.indexOf(x) !== -1);
}
