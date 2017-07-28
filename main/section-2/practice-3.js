'use strict';

module.exports = function countSameElements(collection) {
  let result = new Map();
  let sum = 0;
	collection.forEach(function(item) {
    const reg = /(\w{1}).?(\d*)\]?/;
   
		let [, key, value] = item.match(reg);
    value = value === "" ? 1 : parseInt(value);
    value = result.has(key) ? result.get(key) + value : value;
    result.set(key,value);
  });
  let arr = []
  result.forEach((value, key) => arr.push(({name: key,summary: value})));
  return arr;
}
