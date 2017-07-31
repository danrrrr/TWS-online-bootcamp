'use strict';

function collect_min_number(collection) {
  return collection.reduce((min, current) => min < current ? min : current);
}

module.exports = collect_min_number;

