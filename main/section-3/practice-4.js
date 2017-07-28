'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let mymap = new Map();
    let rex = /(\w{1})\-?(\d*)/;
  collectionA.forEach(function(ele){
      let [_,key,value] = ele.match(rex);
      value = value === ''? 1 : parseInt(value);
      value = mymap.has(key) ? mymap.get(key) + value : value;
      mymap.set(key, value);
  });
  for(let key of objectB.value){
      if(mymap.has(key)){
          let count = mymap.get(key);
          let x = parseInt(count / 3);
          count -= x;
          mymap.set(key, count);
      }
  }
    let arr = [];
mymap.forEach((value, key) => arr.push(({key: key,count: value})));

  return arr;
}
