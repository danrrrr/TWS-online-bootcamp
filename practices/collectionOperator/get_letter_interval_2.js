'use strict';

function get_letter_interval_2(num1, num2) {
  //在这里写入代码
  let result = [];
  let max = num1 > num2 ? num1 : num2;
  let min = num1 < num2 ? num1 : num2;
  for(let i = min; i <= max; i++)
  {
    let s = '';
    let num = i;
    while (num > 0) {
    let m = num % 26
    if (m === 0) m = 26
    s = (m + 9).toString(36) + s
    num = (num - m) / 26
    }
    result.push(s);
  }
  
  return num1 > num2 ? result.reverse() : result;
}

module.exports = get_letter_interval_2;

