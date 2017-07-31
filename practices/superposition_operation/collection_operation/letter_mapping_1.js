'use strict';

function even_to_letter(collection) {
  const latins = 'zabcdefghijklmnopqrstuvwzy'.split('');
  let arr = collection.filter(x => x % 2 === 0);
  let letter = a => a / 26 > 1 ? letter(parseInt(a/26)) + latins[a%26] : latins[a%26];
  return arr.map(x => letter(x));
}

module.exports = even_to_letter;
