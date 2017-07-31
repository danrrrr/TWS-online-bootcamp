'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  let max = number_a > number_b ? number_a : number_b;
  let min = number_a < number_b ? number_a : number_b;
  for(let x = min; x <= max ;x++){
      let s = '';
      let num = x;
      while(num > 0){
          let m = num % 26;
          m = m===0 ? 26 : m;
          s = (m + 9).toString(36) + s;
          num = (num - m) / 26;
      }
      result.push(s);
  }
  return number_a > number_b ? result.reverse() : result;
}
  

module.exports = get_letter_interval;
