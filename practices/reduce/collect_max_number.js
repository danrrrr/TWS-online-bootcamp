'use strict';

function collect_max_number(collection) {
  return collection.reduce((max, value) => max > value ? max : value)
}

module.exports = collect_max_number;
