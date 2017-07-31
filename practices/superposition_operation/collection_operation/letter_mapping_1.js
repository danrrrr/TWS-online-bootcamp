'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  const latins = 'zabcdefghijklmnopqrstuvwzy'.split('');
  let arr = collection.filter(x => x % 2 === 0);
  let letter = a => a / 26 > 1 ? letter(parseInt(a/26)) + latins[a%26] : latins[a%26];
  return arr.map(x => letter(x));
}

module.exports = even_to_letter;
