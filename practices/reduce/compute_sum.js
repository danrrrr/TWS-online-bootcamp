'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, current) => sum + current, 0);
}

module.exports = calculate_elements_sum;

