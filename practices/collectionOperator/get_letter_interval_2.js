'use strict';

function get_letter_interval_2(num1, num2) {
  const arr = [number_to_words(num1)];
  if(num1 === num2) return arr;
  const offset = num1 < num2 ? 1 : -1;
  return [...arr, ...get_letter_interval_2(num1 + offset, num2)];
  
  
  return num1 > num2 ? result.reverse() : result;
}
function number_to_words(num){
  let s = '';
  while(num > 0){
    let m = num % 26;
    m = m === 0 ? 26 : m;
    s = (m + 9).toString(36) + s;
    num = (num - m) / 26;
  }
  return s;
}

module.exports = get_letter_interval_2;

