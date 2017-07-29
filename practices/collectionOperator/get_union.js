'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let myset = new Set(collection_a);
  collection_b.forEach(ele => {if(!myset.has(ele)){myset.add(ele)}});
  return [...myset];
}

module.exports = get_union;

