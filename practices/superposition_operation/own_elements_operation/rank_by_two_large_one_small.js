'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let result = [];
  collection.sort((a, b) => a - b);
  for(let i = 0; i< collection.length; i += 3){
      result.push(collection.slice(i, i + 3));
  }
  result.forEach(ele => {
      if(ele.length === 3){
          ele.push(ele[0]);
          ele.shift(ele[0]);
      }
  });
  let arr = []
  result.forEach(x => arr = [...arr, ...x]);
  return arr;
  
}
module.exports = rank_by_two_large_one_small;
