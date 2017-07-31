'use strict';

function amount_even(collection) {
  return collection.filter(x => x % 2 ===0).reduce((sum, current) => sum + current, 0);
}

module.exports = amount_even;
