'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return [... new Set(collectionA.filter(ele => collectionB.indexOf(ele) !== -1))];
};
