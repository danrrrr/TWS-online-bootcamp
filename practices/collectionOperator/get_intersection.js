'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(ele => collection_a.indexOf(ele) !== -1);
}

module.exports = get_intersection;
