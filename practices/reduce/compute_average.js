'use strict';

function compute_average(collection) {
  let sum = collection.reduce((sum, current) => sum + current, 0);
  return sum / collection.length;
}

module.exports = compute_average;

