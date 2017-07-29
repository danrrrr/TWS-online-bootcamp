'use strict';

function get_integer_interval(number_a, number_b) {
    let result = [];
    let max = number_a > number_b ? number_a : number_b;
    let min = number_a < number_b ? number_a : number_b;
    for(let i = min; i <= max; i++){
     result.push(i);
  }
	return number_a > number_b ? result.reverse() : result;
}

module.exports = get_integer_interval;

