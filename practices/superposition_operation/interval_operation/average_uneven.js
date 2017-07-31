'use strict';

function average_uneven(collection) {
  return collection.filter(x => x % 2 ===1).reduce((sum, current) => sum + current, 0)/ collection.filter(x => x % 2 ===1).length;
}

module.exports = average_uneven;
