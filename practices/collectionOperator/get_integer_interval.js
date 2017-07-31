'use strict';

function get_integer_interval(number_a, number_b) {
  const arr = [number_a];
  if(number_a === number_b) return arr;
  const offset = number_a < number_b ? 1 : -1;
  return [...arr, ...get_integer_interval(number_a + offset, number_b)];
}

module.exports = get_integer_interval;

