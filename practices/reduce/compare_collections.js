'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.sort().join('') === collection_b.sort().join('');
}

module.exports = compare_collections;


