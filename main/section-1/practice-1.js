'use strict';

module.exports = (collectionA, collectionB) =>
  [... new Set(collectionA.filter(x => collectionB.indexOf(x) !== -1))];
  