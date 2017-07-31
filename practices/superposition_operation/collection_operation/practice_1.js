'use strict';

function hybrid_operation(collection) {
  return collection.map(x => x * 3 + 2).reduce((sum, x) => sum += x, 0);
}

module.exports = hybrid_operation;

